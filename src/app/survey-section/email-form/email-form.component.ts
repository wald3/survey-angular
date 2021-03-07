import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuizEmailResult } from 'src/app/shared/models/quiz.interface';

@Component({
	selector: 'app-email-form',
	templateUrl: './email-form.component.html',
	styleUrls: ['./email-form.component.less']
})
export class EmailFormComponent implements OnInit {

	@Input() form: QuizEmailResult;
	@Output() sendEmailEvent = new EventEmitter<boolean>();
	@ViewChild('email') emailInput: FormControl;
	clickError: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	onSendEmailClick(){
		if(this.emailInput.valid){
			this.sendEmailEvent.emit(this.emailInput.valid);
		}
		else{
			this.clickError = true;
			setTimeout(() => {
			  this.clickError = false;
			}, 200);
		}
		
	}
}
