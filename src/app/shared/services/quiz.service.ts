import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Question } from "../models/quiz.interface";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    private url: string = 'http://localhost:3000/api/bots';

    constructor(private http: HttpClient) { }

    async getSurveyData(path: string) {
        console.log(`${this.url}/${path}`);
        return await this.http.get(`${this.url}/${path}`, await this.getHeader());
    }

    async sendSurveyData(path: string, data: Object) {
        console.log(`${this.url}/${path}`, data);
        return await this.http.post(`${this.url}/${path}`, data, await this.getHeader()).subscribe(
            sub => {
                return;
            }
        );
    }

    private async getHeader(){
        return await { headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiI"+
            "sInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InV1aWQiOiJBaWo1WDV4VSIsImlkIjox"+
            "OCwiZW1haWwiOiJ0ZXN0LWZvcm1AZ21haWwuY29tIiwicmVmcmVzaCI6bnVsbH"+
            "0sImlhdCI6MTYxMzc5Nzk1MiwiZXhwIjoxNjE0OTk3OTUyfQ.VCGiJk6h9PUzb"+
            "D0IOTMQ6NS9eOa16F1CnQhzK5Ogkpk" }};
    }
}