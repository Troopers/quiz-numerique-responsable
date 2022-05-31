import Head from "next/head";
import { FC } from "react";

export const QuizzHead: FC<{
  title: string;
}> = ({ title }) => {
  return (
    <Head>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Jour au quizz du numérique responsable et tente de gagner une corbeille de fruits avec Graines d'ici et Troopers !"
      />
    </Head>
  );
};
