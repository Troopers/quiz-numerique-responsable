import { NextPage } from "next";
import { Layout } from "../components/Core/Layout";
import { QuestionCard } from "../components/QuestionCard";

interface QuestionType {
  title: string;
  options: string[];
  companyNameInfo?: string;
}

const Quizz: NextPage = () => {
  // Waiting call Api
  const questions: QuestionType[] = [
    {
      title:
        "Entre 2010 et 2020, le poids moyen d’une page web à été mutliplié par :",
      options: ["x2", "x10", "x4"],
      companyNameInfo: "Stratosfair",
    },
    {
      title:
        "Quelle est la quantité de matière première nécessaire pour fabriquer un smartphone de 200g ?",
      options: ["20kg", "200kg", "2kg"],
    },
    {
      title:
        "Quel est le pourcentage de femmes dans les métiers du numérique ?",
      options: ["30%", "40%", "Longue réponse"],
      companyNameInfo: "Troopers",
    },
  ];

  return (
    <Layout>
      {questions.map((question, i) => (
        <QuestionCard key={i} {...question} number={i + 1} />
      ))}
    </Layout>
  );
};

export default Quizz;
