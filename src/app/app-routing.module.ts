import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/admin/dashboard/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { QuizQuestionsComponent } from './pages/admin/quiz-questions/quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserDashBoardComponent } from './pages/user/user-dash-board/user-dash-board.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { PreQuizComponent } from './pages/user/pre-quiz/pre-quiz.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { MediaComponent } from './pages/user/media/media.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: RegisterComponent },

  {
    path: "admin",
    component: AdminDashboardComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },

      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'categories',
        component: ViewCategoryComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'quiz',
        component: ViewQuizComponent
      }, {
        path: 'quiz/:id',
        component: UpdateQuizComponent
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent
      },
      {
        path: 'questions/:id/:title',
        component: QuizQuestionsComponent
      },
      {
        path: 'add-question/:id/:title',
        component: AddQuestionComponent
      }

    ]

  },

  {
    path: "user-dashboard",
    component: UserDashBoardComponent,
    canActivate: [userGuard],
    children: [{
      path: ':catId', component: LoadQuizComponent
    },
    {
      path: 'prequiz/:id', component: PreQuizComponent
    },
   
    ]
  },
  {
    path: 'start/:id', component: StartQuizComponent, canActivate: [userGuard]
  },
  {
    path: 'camera', component: MediaComponent
  },
  {
    path: 'user/profile', component: UserProfileComponent,canActivate:[userGuard]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
