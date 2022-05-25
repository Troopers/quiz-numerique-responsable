// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Response = {
  score: number;
  code: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    try {
      const { API_URL } = process.env;
      const response = await fetch(`${API_URL}/quizz`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: req.body,
      });
      const content = await response.json();

      res.status(200).json(content);
    } catch (e) {
      console.log("error", e);
      res.status(400).json(e);
    }
  } else {
    res.status(400);
  }
};

export default handler;
