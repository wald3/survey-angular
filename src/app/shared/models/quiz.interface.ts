import { QuizType } from "./quiz-type.enum";

interface  Question {
    question: string;
    type: QuizType;
}

interface QuizTextResult extends Question {
    options: string[];
    result: number;
}

interface QuizNumberResult extends Question {
    result: number;
}

interface QuizEmailResult extends Question {
    result: string;
}


export { 
    Question,
    QuizTextResult,
    QuizNumberResult,
    QuizEmailResult
}