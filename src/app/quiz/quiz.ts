

export interface Quiz {

  id: number;
  question: string;
  code?: string;
  options: {
    option1: string;
    option2: string;
    option3: string;
  };
  correct: string;
  answer?: string;

}
