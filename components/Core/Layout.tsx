import { Container } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { CenterBlock } from "./CenterBlock";
import { Header } from "./Header";

export const Layout: FC<{ children: ReactElement[] | ReactElement }> = ({
  children,
}) => {
  return (
    <Container height="90vh" position="relative">
      <Header />
      <CenterBlock>{children}</CenterBlock>
    </Container>
  );
};
