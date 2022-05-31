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
    media: string;
  }[];
} = {
  troopers: [
    {
      name: "Troopers",
      link: "https://fr.linkedin.com/company/troopers-agency",
      icon: <LinkedInIcon />,
      media: "Linkedin",
    },
    {
      name: "@Troopersagency",
      link: "https://twitter.com/troopersagency",
      icon: <TwitterIcon />,
      media: "Twitter",
    },
  ],
  grainesdici: [
    {
      name: "@grainesdici",
      link: "https://www.facebook.com/grainesdici/",
      icon: <FacebookIcon />,
      media: "Facebook",
    },
    {
      name: "grainesdici.fr",
      link: "https://www.grainesdici.fr/",
      icon: <WebsiteIcon />,
      media: "Site Web",
    },
  ],
};

export const SocialMediaLinks: FC<SocialMediaLinksProps> = ({ variant }) => {
  const medias = mediaList[variant];
  return (
    <Flex width="100%" flexDirection="row" justifyContent="center">
      <Flex flexDirection="column">
        {medias.map((m, i) => (
          <Box
            display="flex"
            alignItems="center"
            _last={{ marginTop: "16px" }}
            aria-label={`${m.media} ${m.name}`}
            key={i}
          >
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
