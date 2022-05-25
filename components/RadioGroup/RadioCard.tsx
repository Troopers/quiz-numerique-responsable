import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";
import { FC } from "react";

export const RadioCard: FC<UseRadioProps & { children: string }> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        width="100%"
        boxShadow="md"
        _checked={{
          bg: "green.900",
          color: "white",
          borderColor: "green.900",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
