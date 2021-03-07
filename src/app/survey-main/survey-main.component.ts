import { Component, OnInit } from '@angular/core';

export interface Route {
	link: string,
	discription: string
}

@Component({
  selector: 'app-survey-main',
  templateUrl: './survey-main.component.html',
  styleUrls: ['./survey-main.component.less']
})
export class SurveyMainComponent implements OnInit {

	routes: Route[] = [
		{
			link: 'default-test',
			discription: 'Солнечная система'
		},
		{
			link: 'default-test',
			discription: 'Солнечная система и немного текста для теста'
		},
		{
			link: 'setup-test',
			discription: 'Походный опрос'
		},
		{
			link: 'setup-test',
			discription: 'Походный опрос и немного текста для теста'
		}

	]

	constructor() { }

	ngOnInit(): void {
	}

}
