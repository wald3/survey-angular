import { Component, OnInit } from '@angular/core';
import { quizDefaults } from '../shared/data/default';
import { QuizType } from '../shared/models/quiz-type.enum';
import { Question, QuizEmailResult } from '../shared/models/quiz.interface';

@Component({
	selector: 'app-survey-section',
	templateUrl: './survey-section.component.html',
	styleUrls: ['./survey-section.component.less']
})
export class SurveySectionComponent implements OnInit {
	quizPool: Question[];
	currentQuiz: Question;
	completed: number = 0;

	constructor() {
		this.quizPool = quizDefaults;
		if(this.quizPool.length > 0){
			this.currentQuiz = this.quizPool[0];
		}
	}

	ngOnInit(): void {
	}

	nextStepButtonClick() {
		console.log('clicked');
		this.completed++;

		if(this.completed < this.quizPool.length){
			this.currentQuiz = this.quizPool[this.completed];
		}else{
			let email: QuizEmailResult = {
				type: QuizType.EMAIL,
				question: "age?",
				result: ''
			};

			this.currentQuiz = email;
		}
	}
}
