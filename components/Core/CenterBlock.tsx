import { Container, Flex } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

export const CenterBlock: FC<{ children: ReactElement[]; gap?: number }> = ({
  children,
  gap,
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      height="100%"
      gap={gap || "70px"}
      py={10}
    >
      {children}
    </Flex>
  );
};
