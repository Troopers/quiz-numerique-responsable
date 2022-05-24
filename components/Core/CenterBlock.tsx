import { Container, Flex } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

export const CenterBlock: FC<{
  children: ReactElement[] | ReactElement;
  gap?: number;
}> = ({ children, gap }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      height="100%"
      gap={gap || "70px"}
      py={5}
    >
      {children}
    </Flex>
  );
};
