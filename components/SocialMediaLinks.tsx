import { Box, Flex, Link } from "@chakra-ui/react";
import { FC } from "react";
import { LinkedInIcon } from "./Icons/LinkedIn";
import { TwitterIcon } from "./Icons/Twitter";

interface SocialMediaLinksProps {
  variant: "grainesdici" | "troopers";
}

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ variant }) => {
  const media =
    variant === "troopers"
      ? {
          linkedIn: {
            name: "Troopers",
            link: "https://fr.linkedin.com/company/troopers-agency",
          },
          twitter: {
            name: "@Troopersagency",
            link: "https://twitter.com/troopersagency",
          },
        }
      : {
          linkedIn: {
            name: "Graines d'ici",
            link: "https://fr.linkedin.com/company/graines-d-ici",
          },
          twitter: {
            name: "@grainesdici",
            link: "https://twitter.com/grainesdici",
          },
        };

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
