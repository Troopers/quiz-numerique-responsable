import { Flex, useRadioGroup } from "@chakra-ui/react";
import { FC } from "react";
import { useAnswers } from "../../contexts/AnswersContext";
import { Answer, AnswerChoosed } from "../../types/types";
import { RadioCard } from "./RadioCard";

interface RadioGroupProps {
  options: Answer[];
  question_id: string;
  defaultAnswer?: AnswerChoosed;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  question_id,
  defaultAnswer,
}) => {
  const { updateAnswers } = useAnswers();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: `question-${question_id}`,
    onChange: (value) => updateAnswers && updateAnswers(question_id, value),
    defaultValue: defaultAnswer?.answer_id,
  });

  const group = getRootProps();

  return (
    <Flex {...group} gap={2} wrap="wrap" justify="center">
      {options.map(({ id, name }) => {
        const radio = getRadioProps({
          value: id.toString(),
        });
        return (
          <RadioCard key={id} {...radio}>
            {name}
          </RadioCard>
        );
      })}
    </Flex>
  );
};
