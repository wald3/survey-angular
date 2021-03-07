import { QuizType } from "../models/quiz-type.enum";
import { QuizEmailResult, QuizNumberResult, QuizTextResult } from "../models/quiz.interface";

export let quizDefaults: Array<QuizTextResult | QuizNumberResult | QuizEmailResult> = [
    {
        type: QuizType.TEXT,
        question: "A B C D?",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: undefined,
        image: 'https://imgur.com/TZzh4fl.png'
    },
    {
        type: QuizType.NUMBER,
        question: "Ваш возраст:",
        answer: undefined,
        image: 'https://imgur.com/KuGM6Qe.png'
    },
    {
        type: QuizType.NUMBER,
        question: "Ваш рост:",
        answer: undefined,
        image: 'https://imgur.com/OV9n2NT.png'
    },
    {
        type: QuizType.TEXT,
        question: "1 / 2 / 3?",
        options: [
            "1",
            "2",
            "3"
        ],
        answer: undefined,
        image: 'https://imgur.com/ZlgHFEU.png'
    },
    {
        type: QuizType.NUMBER,
        question: "Ваш вес:",
        answer: undefined,
        image: 'https://imgur.com/SP8nNuU.png'
    }
];