import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveySectionComponent } from './survey-section/survey-section.component';
import { QuestionComponent } from './survey-section/question-text/question-text.component';
import { ProgressBarComponent } from './survey-section/progress-bar/progress-bar.component';
import { EmailFormComponent } from './survey-section/email-form/email-form.component';
import { QuiestionNumberComponent } from './survey-section/quiestion-number/quiestion-number.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuizService } from './shared/services/quiz.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SurveySectionComponent,
    QuestionComponent,
    ProgressBarComponent,
    EmailFormComponent,
    QuiestionNumberComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '**', component: SurveySectionComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
