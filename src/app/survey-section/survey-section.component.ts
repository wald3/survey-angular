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
	clickError: boolean = false;

	constructor() {
		this.quizPool = quizDefaults;
		if(this.quizPool.length > 0){
			this.currentQuiz = this.quizPool[0];
		}
	}

	ngOnInit(): void {
	}

	nextStepButtonClick() {
		if(!this.currentQuiz?.answer){
			this.shakeButton();
			return;
		}

		this.completed++;

		if(this.completed < this.quizPool.length){
			this.currentQuiz = this.quizPool[this.completed];
		}else{
			let email: QuizEmailResult = {
				type: QuizType.EMAIL,
				question: "age?",
				answer: ''
			};

			this.currentQuiz = email;
		}
	}

	emailSendButtonClick() {
		console.log('send email');
		this.currentQuiz = this.quizPool[0];
		this.completed = 0;
	}

	private shakeButton() {
		this.clickError = true;
		setTimeout(() => {
		  this.clickError = false;
		}, 200);
	  }
}
