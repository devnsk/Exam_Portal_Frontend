import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon'; 
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AdminDashboardComponent } from './pages/admin/dashboard/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatListModule} from '@angular/material/list';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { SideBarComponent } from './pages/admin/side-bar/side-bar.component'; 
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { QuizQuestionsComponent } from './pages/admin/quiz-questions/quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UserDashBoardComponent } from './pages/user/user-dash-board/user-dash-board.component';
import { UserSideBarComponent } from './pages/user/user-side-bar/user-side-bar.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { PreQuizComponent } from './pages/user/pre-quiz/pre-quiz.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MediaComponent } from './pages/user/media/media.component'; 
import { WebcamModule } from 'ngx-webcam';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import {MatDialogModule} from '@angular/material/dialog'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserDashBoardComponent,
    AdminDashboardComponent,
    NotFoundComponent,
    AdminHomeComponent,
    SideBarComponent,
    ProfileComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    QuizQuestionsComponent,
    AddQuestionComponent,
    UserSideBarComponent,
    LoadQuizComponent,
    StartQuizComponent,
    PreQuizComponent,
    MediaComponent,
    UserProfileComponent
 
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule, // for forms usage
    HttpClientModule, // for api call in angular
   MatIconModule,
   MatListModule,
   MatSelectModule,
   MatProgressSpinnerModule,
   WebcamModule,
   MatDialogModule
   
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
