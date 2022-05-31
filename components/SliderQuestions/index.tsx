import { SlideFade } from "@chakra-ui/react";
import { FC } from "react";
import { useAnswers } from "../../contexts/AnswersContext";
import { QuestionType } from "../../types/types";
import { QuestionCard } from "./QuestionCard";

interface SliderQuestionsProps {
  questions: QuestionType[];
  currentQuestionIndex: number;
}

const SliderQuestions: FC<SliderQuestionsProps> = ({
  questions,
  currentQuestionIndex,
}) => {
  const { answers } = useAnswers();

  return (
    <>
      {questions.map(
        (question, i) =>
          currentQuestionIndex === i && (
            <SlideFade in={currentQuestionIndex === i} offsetY="20px">
              <QuestionCard
                key={question.id}
                {...question}
                number={i + 1}
                nbQuestions={questions.length}
                defaultAnswer={
                  answers?.filter(
                    (answer) => answer.question_id === question.id
                  )[0]
                }
              />
            </SlideFade>
          )
      )}
    </>
  );
};

export default SliderQuestions;
