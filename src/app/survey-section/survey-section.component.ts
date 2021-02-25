import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizType } from '../shared/models/quiz-type.enum';
import { Question, QuizEmailResult, QuizNumberResult, QuizTextResult } from '../shared/models/quiz.interface';
import { Location } from '@angular/common';
import { QuizService } from '../shared/services/quiz.service';
import { quizDefaults } from '../shared/data/default';

@Component({
	selector: 'app-survey-section',
	templateUrl: './survey-section.component.html',
	styleUrls: ['./survey-section.component.less']
})
export class SurveySectionComponent implements OnInit {
	quizPool: Question[] = [];
	currentQuiz: Question;
	completed: number = 0;
	clickError: boolean = false;

	constructor(
		private location: Location,
		private surveyService: QuizService
		) {	}

	ngOnInit(): void {
		this.surveyService.getSurveyData(this.location.path().replace('/',''))
			.then(res => res
				.subscribe(
					res => { 
						console.log('res', res);
						this.quizPool = res as Question[];
						this.quizPool.push({
							type: QuizType.EMAIL,
							question: "Введите ваш email:",
							answer: ''
						});
						this.currentQuiz = this.quizPool[0];
					},
					err => {
						console.log('err', err);
						this.quizPool = quizDefaults;
						this.quizPool.push({
							type: QuizType.EMAIL,
							question: "Введите ваш email:",
							answer: ''
						});
						this.currentQuiz = this.quizPool[0];
					}
				)
		);
	}

	previousButtonClick(){
		if(this.completed > 0){
			this.completed--;
			this.currentQuiz = this.quizPool[this.completed];
		}
	}

	nextStepButtonClick() {
		if(!this.currentQuiz?.answer){
			this.shakeButton();
			return;
		}

		this.completed++;

		if(this.completed < this.quizPool.length){
			this.currentQuiz = this.quizPool[this.completed];
		}
	}

	emailSendButtonClick() {
		console.log('send email');

		const data = this.getResult();
		console.log(data);
		this.surveyService.sendSurveyData(this.location.path().replace('/',''), data);
		this.quizPool = undefined;
		
	}

	private getResult(){
		const data: any = {};
		for (let i = 0; i < this.quizPool.length; i++) {
			const quiz = this.quizPool[i];
			if(quiz.type === QuizType.TEXT){
				console.log(quiz.type, 'QuizTextResult');
				const q = quiz as QuizTextResult;
				data[i] = {
					question: q.question,
					answer: q.options[q.answer]
				};
			}
			if(quiz.type === QuizType.NUMBER){
				console.log(quiz.type, 'QuizNumberResult');
				const q = quiz as QuizNumberResult;
	
				data[i] = {
					question: q.question,
					answer: q.answer
				};
			}
			if(quiz.type === QuizType.EMAIL){
				console.log(quiz.type, 'QuizEmailResult');
				const q = quiz as QuizEmailResult;

				data[i] = {
					question: 'EMAIL:',
					answer: q.answer
				};
			}
		}

		return data;
	}

	private shakeButton() {
		this.clickError = true;
		setTimeout(() => {
		  this.clickError = false;
		}, 200);
	}
}
