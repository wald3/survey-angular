import { Component, Input, OnInit } from '@angular/core';
import { QuizTextResult } from 'src/app/shared/models/quiz.interface';

@Component({
	selector: 'app-question-text',
	templateUrl: './question-text.component.html',
	styleUrls: ['./question-text.component.less']
})
export class QuestionComponent implements OnInit {

	@Input() quiz: QuizTextResult;

	constructor() { }

	ngOnInit(): void {
	}

}
