# SurveyApp

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Code

<b>What server need to send on GET:</b>

```javascript

enum QuizType {
    TEXT = 'TEXT',
    NUMBER = 'NUMBER',
    EMAIL = 'EMAIL'
}

let quizDefaults = [
    {
        type: QuizType.NUMBER,
        question: "Ваш возраст:",
        answer: undefined,
        image: 'https://imgur.com/mZ6JMlD.png'
    },
    {
        type: QuizType.NUMBER,
        question: "Сколько раз вы были в походе:",
        answer: undefined,
        image: 'https://imgur.com/5cgrj18.png'
    },
    {
        type: QuizType.TEXT,
        question: "Какое животное вам больше нравиться:",
        options: [
            "Волк",
            "Медведь",
            "Лиса",
            "Хорек"
        ],
        answer: undefined,
        image: 'https://imgur.com/YkK98dy.png'
    }
];
```

<b>What server will resive on POST:</b>

![response](https://imgur.com/1mrfGyn.png)

### Backend Server works
![Backend Server works](https://imgur.com/TqNSfyE.gif)

### Backend Server is not connected
![Backend Server is not connected](https://imgur.com/FhQ6Fe8.gif)


