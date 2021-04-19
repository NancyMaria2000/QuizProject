import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorComponent } from './error/error.component';
import { HighScoreComponent } from './high-score/high-score.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizComponent } from './quiz/quiz.component';
import { SharedComponent } from './shared/shared.component';
import { QuestionsAnswersComponent } from './quiz/questions-answers/questions-answers.component';
import { ResultsComponent } from './quiz/results/results.component';
import { TimerComponent } from './quiz/timer/timer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorComponent,
    HighScoreComponent,
    HomeComponent,
    ProfileComponent,
    QuizComponent,
    SharedComponent,
    QuestionsAnswersComponent,
    ResultsComponent,
    TimerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
