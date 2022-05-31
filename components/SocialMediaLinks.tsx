import { Box, Flex, Link } from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { FacebookIcon } from "./Icons/Facebook";
import { LinkedInIcon } from "./Icons/LinkedIn";
import { TwitterIcon } from "./Icons/Twitter";
import { WebsiteIcon } from "./Icons/Website";

interface SocialMediaLinksProps {
  variant: "grainesdici" | "troopers";
}

const mediaList: {
  [key: string]: {
    name: string;
    link: string;
    icon: ReactElement;
  }[];
} = {
  troopers: [
    {
      name: "Troopers",
      link: "https://fr.linkedin.com/company/troopers-agency",
      icon: <LinkedInIcon />,
    },
    {
      name: "@Troopersagency",
      link: "https://twitter.com/troopersagency",
      icon: <TwitterIcon />,
    },
  ],
  grainesdici: [
    {
      name: "@grainesdici",
      link: "https://www.facebook.com/grainesdici/",
      icon: <FacebookIcon />,
    },
    {
      name: "grainesdici.fr",
      link: "https://www.grainesdici.fr/",
      icon: <WebsiteIcon />,
    },
  ],
};

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ variant }) => {
  const media = mediaList[variant];
  return (
    <Flex width="100%" flexDirection="row" justifyContent="center">
      <Flex flexDirection="column">
        {media.map((m) => (
          <Box display="flex" alignItems="center" _last={{ marginTop: "16px" }}>
            {m.icon}
            <Link marginLeft={2} href={m.link}>
              {m.name}
            </Link>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
