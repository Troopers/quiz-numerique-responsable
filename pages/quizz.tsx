import { Spinner } from "@chakra-ui/react";
import { NextPage } from "next";
import { Layout } from "../components/Core/Layout";
import SliderQuizz from "../components/SliderQuizz";
import { AnswersProvider } from "../contexts/AnswersContext";
import { QuestionType } from "../types/types";

interface QuizzProps {
  questions: QuestionType[];
}

const Quizz: NextPage<QuizzProps> = ({ questions }) => {
  if (!questions) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <AnswersProvider>
      <Layout>
        <SliderQuizz questions={questions} />
      </Layout>
    </AnswersProvider>
  );
};

export async function getStaticProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/questions`);
  const questions = await res.json();

  return {
    props: { questions },
  };
}

export default Quizz;
