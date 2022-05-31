import { Container, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { FC, ReactElement } from "react";
import { AccessibilityButton } from "./AccessibilityButton";
import { QuizzHead } from "./Head";
import { Header } from "./Header";

export const Layout: FC<{
  children: ReactElement[] | ReactElement;
  title: string;
}> = ({ children, title, ...props }) => {
  return (
    <>
      <QuizzHead title={title} />
      <AccessibilityButton />
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
          <Flex
            direction="column"
            align="center"
            justify="space-between"
            py={5}
            gap={"20px"}
            height="80vh"
            as="main"
            id="main"
          >
            {children}
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
