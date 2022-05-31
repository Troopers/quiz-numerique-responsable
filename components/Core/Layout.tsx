import { Container, Flex } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { Header } from "./Header";

export const Layout: FC<{
  children: ReactElement[] | ReactElement;
}> = ({ children, ...props }) => {
  return (
    <Container position="relative" {...props}>
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        py={5}
        gap={"20px"}
        height="80vh"
      >
        <Header />
        {children}
      </Flex>
    </Container>
  );
};
