import React, {
  createContext,
  FC,
  ReactElement,
  useContext,
  useState,
} from "react";
import { AnswerChoosed } from "../types/types";

type AnswersContextProps = {
  answers: AnswerChoosed[];
  updateAnswers: (question_id: string, answer_id: string) => void;
};

export const AnswersContext = createContext<Partial<AnswersContextProps>>({});

export const AnswersProvider: FC<{
  children: ReactElement | ReactElement[];
}> = ({ children }) => {
  const [answers, setAnswers] = useState<AnswerChoosed[]>([]);

  console.log(answers);

  const updateAnswersAlreadyInQuestion = (
    question_id: string,
    answer_id: string
  ) => {
    const answersUpdated = [...answers].map((ans) => {
      if (ans.question_id !== question_id) {
        return { question_id: ans.question_id, answer_id: ans.answer_id };
      }
      return { question_id: question_id, answer_id: answer_id };
    });
    setAnswers(answersUpdated);
  };

  const updateAnswers = (question_id: string, answer_id: string) => {
    const allQuetionsId = answers.map(({ question_id }) => question_id);

    if (allQuetionsId.includes(question_id)) {
      updateAnswersAlreadyInQuestion(question_id, answer_id);
    } else {
      setAnswers([...answers, { question_id, answer_id }]);
    }
  };

  return (
    <AnswersContext.Provider
      value={{
        answers,
        updateAnswers,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};

export function useAnswers() {
  return useContext(AnswersContext);
}
