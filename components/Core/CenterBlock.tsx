import { Flex, FlexProps } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

export const CenterBlock: FC<{
  children: ReactElement[] | ReactElement;
  gap?: number;
  flexProps?: FlexProps;
}> = ({ children, gap, flexProps }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      py={1}
      {...flexProps}
      gap={gap || "40px"}
    >
      {children}
    </Flex>
  );
};
