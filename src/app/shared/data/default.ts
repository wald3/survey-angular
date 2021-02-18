import { QuizType } from "../models/quiz-type.enum";
import { QuizEmailResult, QuizNumberResult, QuizTextResult } from "../models/quiz.interface";

export let quizDefaults: Array<QuizTextResult | QuizNumberResult | QuizEmailResult> = [
    {
        type: QuizType.NUMBER,
        question: "Age?",
        result: undefined
    },
    {
        type: QuizType.NUMBER,
        question: "Age?",
        result: undefined
    },
    {
        type: QuizType.NUMBER,
        question: "Age?",
        result: undefined
    },
    {
        type: QuizType.TEXT,
        question: "Але, ну че там с деньгами?",
        options: [
            "С какими деньгами",
            "Которые я вложил",
            "Куда вложил",
            "В капитал прожиточного минимума"
        ],
        result: undefined
    },
    {
        type: QuizType.TEXT,
        question: "test 1234?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        result: undefined
    }
];