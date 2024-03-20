import { Container } from "@chakra-ui/react";
import { FC } from "react";
import { SocialMediaLinks } from "./SocialMediaLinks";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <Container
      as="footer"
      padding={5}
      flexDirection="row"
      display="flex"
      alignItems="center"
      bg="green.50"
    >
      <SocialMediaLinks variant="troopers" />
    </Container>
  );
};
