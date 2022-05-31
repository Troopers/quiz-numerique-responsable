import Router from "next/router";
import { FC, useState } from "react";
import { useAnswers } from "../contexts/AnswersContext";
import { QuestionType } from "../types/types";
import SliderQuestions from "./SliderQuestions";
import Buttons from "./SliderQuestions/Buttons";

interface SliderQuizzProps {
  questions: QuestionType[];
}

const SliderQuizz: FC<SliderQuizzProps> = ({ questions }) => {
  const { answers } = useAnswers();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const submitAnswers = async () => {
    const formatedAnswers = answers?.map(({ question_id, answer_id }) => {
      return { question: question_id, answer: answer_id };
    });

    const response = await fetch(`/api/quizz`, {
      method: "POST",
      body: JSON.stringify({ quizz: formatedAnswers }),
    });

    const data = await response.json();
    const { code, score } = data;

    Router.push(
      {
        pathname: "results",
        query: {
          code,
          score,
          questionNumber: questions?.length,
        },
      },
      "/results"
    );
  };

  return (
    <>
      <SliderQuestions
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <Buttons
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        submitAnswers={submitAnswers}
      />
    </>
  );
};

export default SliderQuizz;
