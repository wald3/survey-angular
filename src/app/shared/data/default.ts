import { QuizType } from "../models/quiz-type.enum";
import { QuizEmailResult, QuizNumberResult, QuizTextResult } from "../models/quiz.interface";

export let quizDefaults: Array<QuizTextResult | QuizNumberResult | QuizEmailResult> = [
    {
        type: QuizType.TEXT,
        question: "Але, ну че там с деньгами?",
        options: [
            "С какими деньгами",
            "Которые я вложил",
            "Куда вложил",
            "В капитал прожиточного минимума"
        ],
        answer: undefined
    },
    {
        type: QuizType.NUMBER,
        question: "Ваш возраст:",
        answer: undefined
    },
    {
        type: QuizType.NUMBER,
        question: "Ваш вес:",
        answer: undefined
    },
    {
        type: QuizType.NUMBER,
        question: "Ваш рост:",
        answer: undefined
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
        answer: undefined
    },
    {
        type: QuizType.TEXT,
        question: "Чики-Брики и ...?",
        options: [
            "В дамки",
            "Маслину ловить"
        ],
        answer: undefined
    }
];