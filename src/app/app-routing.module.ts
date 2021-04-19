import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// AuthGuard
import { AuthGuard } from './auth/auth-guard.service';
// Components
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { HighScoresComponent } from "./high-score/high-score.component";
import { ProfileComponent } from "./profile/profile.component";
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'high-scores', component: HighScoresComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: ErrorComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }

export const appRoutingProviders: any[] = [AuthGuard];

export const appRouting: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
