import { Flex, Link } from "@chakra-ui/react";
import { FC } from "react";
import { CenterBlock } from "./Core/CenterBlock";
import { LinkedInIcon } from "./Icons/LinkedIn";
import { TwitterIcon } from "./Icons/Twitter";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-between"
      height="100%"
      gap={5}
      py={5}
      bg="green.50"
      width="100%"
    >
      <Flex gap={2}>
        <LinkedInIcon />
        <Link>@TroopersAgency</Link>
      </Flex>
      <Flex gap={2}>
        <TwitterIcon />
        <Link>Troopers</Link>
      </Flex>
    </Flex>
  );
};
