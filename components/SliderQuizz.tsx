import { FC, useState } from "react";
import { useAnswers } from "../contexts/AnswersContext";
import { Response } from "../pages/api/quizz";
import Router from "next/router";
import { QuestionType } from "../types/types";
import SliderQuestions from "./SliderQuestions";
import Buttons from "./SliderQuestions/Buttons";

interface SliderQuizzProps {
  questions: QuestionType[];
}

const SliderQuizz: FC<SliderQuizzProps> = ({ questions }) => {
  const { answers } = useAnswers();

  const [response, setResponse] = useState<Response>();
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
    setResponse(data);
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

      {/* Waiting Vincent */}
      {!!response && (
        <p>
          Tu as eu {response?.score} bonnes reponses et ton id est :{" "}
          {response?.code}
        </p>
      )}
    </>
  );
};

export default SliderQuizz;
