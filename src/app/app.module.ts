import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurveySectionComponent } from './survey-section/survey-section.component';
import { QuestionComponent } from './survey-section/question-text/question-text.component';
import { ProgressBarComponent } from './survey-section/progress-bar/progress-bar.component';
import { EmailFormComponent } from './survey-section/email-form/email-form.component';
import { QuiestionNumberComponent } from './survey-section/quiestion-number/quiestion-number.component';
import { FormsModule } from '@angular/forms';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
