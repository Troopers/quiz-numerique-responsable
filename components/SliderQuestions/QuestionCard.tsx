import { Box, Tag, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Answer, AnswerChoosed } from "../../types/types";
import { CompanyInfo } from "../CompanyInfo";
import { CenterBlock } from "../Core/CenterBlock";
import { RadioGroup } from "../RadioGroup";

interface QuestionCardProps {
  id: string;
  number: number;
  name: string;
  answers: Answer[];
  company?: string;
  nbQuestions: number;
  defaultAnswer?: AnswerChoosed;
}

export const QuestionCard: FC<QuestionCardProps> = ({
  id,
  number,
  name,
  answers,
  company,
  nbQuestions,
  defaultAnswer,
}) => {
  return (
    <Box border="1px" borderColor="green.900" p={5} borderRadius={20}>
      <CenterBlock gap={3}>
        <Tag bg="green.900" color="white">
          Question {number}/{nbQuestions}
        </Tag>
        <Text fontSize="xl" fontWeight="bold" align="center">
          {name}
        </Text>
        <RadioGroup
          options={answers}
          question_id={id}
          defaultAnswer={defaultAnswer}
        />
        <>{!!company && <CompanyInfo company={company} />}</>
      </CenterBlock>
    </Box>
  );
};
