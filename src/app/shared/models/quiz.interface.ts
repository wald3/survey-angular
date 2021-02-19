import { QuizType } from "./quiz-type.enum";

interface  Question {
    question: string;
    type: QuizType;
    answer: number | string;
}

interface QuizTextResult extends Question {
    options: string[];
    answer: number;
}

interface QuizNumberResult extends Question {
    answer: number;
}

interface QuizEmailResult extends Question {
    answer: string;
}


export { 
    Question,
    QuizTextResult,
    QuizNumberResult,
    QuizEmailResult
}