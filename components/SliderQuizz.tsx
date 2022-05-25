import { Button } from "@chakra-ui/react";
import { FC, useState } from "react";
import { QuestionType } from "../types/types";
import { QuestionCard } from "./QuestionCard";
import { CheckIcon } from "@chakra-ui/icons";
import { useAnswers } from "../contexts/AnswersContext";
import { Response } from "../pages/api/quizz";

interface SliderQuizzProps {
  questions: QuestionType[];
}

const SliderQuizz: FC<SliderQuizzProps> = ({ questions }) => {
  const { answers } = useAnswers();

  const [response, setResponse] = useState<Response>();

  const submitAnswers = async () => {
    const formatedAnswers = answers?.map(({ question_id, answer_id }) => {
      return { question: question_id, answer: answer_id };
    });

    const response = await fetch(`/api/quizz`, {
      method: "POST",
      body: JSON.stringify({ quizz: formatedAnswers }),
    });

    const data = await response.json();
    console.log("data", data);
    setResponse(data);

    // Missing redirect to result page (coucou Vincent)
  };

  return (
    <>
      {questions.map((question, i) => (
        <QuestionCard key={i} {...question} number={i + 1} />
      ))}

      {/* Waiting Vincent */}
      {!!response && (
        <p>
          Tu as eu {response?.score} bonnes reponses et ton id est :{" "}
          {response?.code}
        </p>
      )}

      <Button
        colorScheme="green"
        bg="green.900"
        size="md"
        borderRadius={50}
        onClick={submitAnswers}
        rightIcon={<CheckIcon />}
      >
        Valider
      </Button>
    </>
  );
};

export default SliderQuizz;
