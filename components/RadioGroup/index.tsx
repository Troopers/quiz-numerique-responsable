import { Flex, useRadioGroup } from "@chakra-ui/react";
import { FC } from "react";
import { RadioCard } from "./RadioCard";

interface RadioGroupProps {
  options: string[];
}

export const RadioGroup: FC<RadioGroupProps> = ({ options }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    // name: "",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Flex {...group} gap={2} wrap="wrap" justify="center">
      {options.map((value: string) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </Flex>
  );
};
