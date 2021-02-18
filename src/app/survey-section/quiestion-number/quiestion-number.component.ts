import { Component, Input, OnInit } from '@angular/core';
import { QuizNumberResult } from 'src/app/shared/models/quiz.interface';

@Component({
	selector: 'app-quiestion-number',
	templateUrl: './quiestion-number.component.html',
	styleUrls: ['./quiestion-number.component.less']
})
export class QuiestionNumberComponent implements OnInit {

	@Input() quiz: QuizNumberResult;

	constructor() { }

	ngOnInit(): void {
	}

}
