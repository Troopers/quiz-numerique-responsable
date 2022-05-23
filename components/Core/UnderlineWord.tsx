import { Box, chakra, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface UnderlineWordProps {
  children: string;
}

const Wrapper = chakra(Flex, {
  baseStyle: {
    backgroundColor: "green.900",
    width: "90%",
    margin: "0 auto",
  },
});

const StyledUnderlineWord = chakra(Box, {
  baseStyle: {
    color: "white",
    width: "100%",
  },
});

export const UnderlineWord: FC<UnderlineWordProps> = ({ children }) => {
  return (
    <Wrapper>
      <StyledUnderlineWord>{children}</StyledUnderlineWord>
    </Wrapper>
  );
};
