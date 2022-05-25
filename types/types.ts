export interface AnswerChoosed {
  question_id: string;
  answer_id: string;
}

export interface Answer {
  id: string;
  name: string;
}

export interface QuestionType {
  id: string;
  name: string;
  answers: Answer[];
  company?: string;
}
