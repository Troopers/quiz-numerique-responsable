import { Box, Tag, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Answer } from "../types/types";
import { CompanyInfo } from "./CompanyInfo";
import { CenterBlock } from "./Core/CenterBlock";
import { RadioGroup } from "./RadioGroup";

interface QuestionCardProps {
  id: string;
  number: number;
  name: string;
  answers: Answer[];
  company?: string;
}

export const QuestionCard: FC<QuestionCardProps> = ({
  id,
  number,
  name,
  answers,
  company,
}) => {
  return (
    <Box border="1px" borderColor="green.900" p={30} borderRadius={20}>
      <CenterBlock gap={10}>
        <Tag bg="green.900" color="white">
          Question {number}/15
        </Tag>
        <Text fontSize="2xl" fontWeight="bold" align="center">
          {name}
        </Text>
        <RadioGroup options={answers} question_id={id} />
        <>{!!company && <CompanyInfo company={company} />}</>
      </CenterBlock>
    </Box>
  );
};
