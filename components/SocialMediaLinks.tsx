import { Box, Flex, Link } from "@chakra-ui/react";
import { FC } from "react";
import { LinkedInIcon } from "./Icons/LinkedIn";
import { TwitterIcon } from "./Icons/Twitter";

interface SocialMediaLinksProps {
  variant: "grainesdici" | "troopers";
}

const mediaList: {
  [key: string]: {
    [key: string]: {
      name: string;
      link: string;
    };
  };
} = {
  troopers: {
    linkedIn: {
      name: "Troopers",
      link: "https://fr.linkedin.com/company/troopers-agency",
    },
    twitter: {
      name: "@Troopersagency",
      link: "https://twitter.com/troopersagency",
    },
  },
  grainesdici: {
    linkedIn: {
      name: "Graines d'ici",
      link: "https://fr.linkedin.com/company/graines-d-ici",
    },
    twitter: {
      name: "@grainesdici",
      link: "https://twitter.com/grainesdici",
    },
  },
};

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ variant }) => {
  const media = mediaList[variant];
  return (
    <Flex width="100%" flexDirection="row" justifyContent="center">
      <Flex flexDirection="column">
        <Box display="flex" alignItems="center">
          <LinkedInIcon />
          <Link marginLeft={2} href={media.linkedIn.link}>
            {media.linkedIn.name}
          </Link>
        </Box>
        <Box display="flex" alignItems="center" marginTop="16px">
          <TwitterIcon />
          <Link marginLeft={2} href={media.twitter.link}>
            {media.twitter.name}
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
