import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {

	@Input() comleted: number;
	@Input() length: number;

	width: number;
	
	constructor() {
		console.log('ctor bar');
	}

	ngOnChanges() {
        this.width = 100 / (this.length / this.comleted);
        
    }

	ngOnInit(): void {
		
	}
}
