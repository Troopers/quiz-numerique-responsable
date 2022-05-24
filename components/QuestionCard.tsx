import { Box, Tag, Text } from "@chakra-ui/react";
import { FC } from "react";
import { CompanyInfo } from "./CompanyInfo";
import { CenterBlock } from "./Core/CenterBlock";
import { RadioGroup } from "./RadioGroup";

interface QuestionCardProps {
  number: number;
  title: string;
  options: string[];
  companyNameInfo?: string;
}

export const QuestionCard: FC<QuestionCardProps> = ({
  number,
  title,
  options,
  companyNameInfo,
}) => {
  return (
    <Box border="1px" borderColor="green.900" p={30} borderRadius={20}>
      <CenterBlock gap={10}>
        <Tag bg="green.900" color="white">
          Question {number}/15
        </Tag>
        <Text fontSize="2xl" fontWeight="bold" align="center">
          {title}
        </Text>
        <RadioGroup options={options} />
        {companyNameInfo &&
          ((<CompanyInfo companyNameInfo={companyNameInfo} />) as any)}
      </CenterBlock>
    </Box>
  );
};
