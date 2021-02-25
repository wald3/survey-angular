import { Component, Input, OnInit } from '@angular/core';
import { QuizEmailResult } from 'src/app/shared/models/quiz.interface';

@Component({
	selector: 'app-email-form',
	templateUrl: './email-form.component.html',
	styleUrls: ['./email-form.component.less']
})
export class EmailFormComponent implements OnInit {

	@Input() form: QuizEmailResult;

	constructor() { }

	ngOnInit(): void {
	}

}
