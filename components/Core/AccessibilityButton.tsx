import { Box, Button, chakra, Flex } from "@chakra-ui/react";
import { FC } from "react";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Wrapper = chakra(Flex, {
  baseStyle: {
    backgroundColor: "green.900",
    width: "90%",
    margin: "0 auto",
  },
});

const StyledAccessibilityButton = chakra(Link, {
  baseStyle: {
    display: "inline-block",
    color: "#555",
    background: "#fff",
    padding: "0.5em",
    position: "absolute",
    left: "-99999rem",
    zIndex: "100",
    "&:focus": {
      left: 0,
    },
  },
});

export const AccessibilityButton: FC = () => {
  return (
    <Wrapper>
      <StyledAccessibilityButton href="#main">
        Aller au contenu
      </StyledAccessibilityButton>
    </Wrapper>
  );
};
