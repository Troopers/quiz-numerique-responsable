import { FC } from "react";
import { QuestionType } from "../types/types";
import { QuestionCard } from "./QuestionCard";

interface SliderQuizzProps {
  questions: QuestionType[];
}

const SliderQuizz: FC<SliderQuizzProps> = ({ questions }) => {
  return (
    <>
      {questions.map((question, i) => (
        <QuestionCard key={i} {...question} number={i + 1} />
      ))}
    </>
  );
};

export default SliderQuizz;
