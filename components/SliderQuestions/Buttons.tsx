import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
} from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import Router from "next/router";
import { FC, MouseEventHandler } from "react";
import { useAnswers } from "../../contexts/AnswersContext";
import { QuestionType } from "../../types/types";

interface ButtonsProps {
  questions: QuestionType[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Function;
  submitAnswers: MouseEventHandler<HTMLButtonElement>;
}

const Buttons: FC<ButtonsProps> = ({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  submitAnswers,
}) => {
  const { answers } = useAnswers();

  const isLastQuestion = questions.length - 1 === currentQuestionIndex;

  const isFirstQuestion = currentQuestionIndex === 0;

  const currentQuestion = questions[currentQuestionIndex];

  const answersOnlyQuestionsId = answers?.map(({ question_id }) => question_id);

  const questionIsResponded = answersOnlyQuestionsId?.includes(
    currentQuestion?.id
  );

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const prevQuestion = () => {
    if (isFirstQuestion) {
      Router.push("/");
    }

    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <>
      <Box pos="absolute" bottom="0" left="0" w="100%" p={5}>
        <Flex justify="space-between" w="100%">
          <Button
            colorScheme="green"
            color="green.900"
            size="md"
            borderRadius={50}
            onClick={prevQuestion}
            leftIcon={isFirstQuestion ? <ArrowBackIcon /> : <ArrowUpIcon />}
            variant="outline"
          >
            {isFirstQuestion ? "Retour" : "Précédent"}
          </Button>

          {isLastQuestion ? (
            <Button
              colorScheme="green"
              bg="green.900"
              size="md"
              borderRadius={50}
              onClick={submitAnswers}
              leftIcon={<CheckIcon />}
            >
              Valider
            </Button>
          ) : (
            <Button
              colorScheme="green"
              bg="green.900"
              size="md"
              borderRadius={50}
              onClick={nextQuestion}
              leftIcon={<ArrowDownIcon />}
              disabled={!questionIsResponded}
            >
              Suivant
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Buttons;
