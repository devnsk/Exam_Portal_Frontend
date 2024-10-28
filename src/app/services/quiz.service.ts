import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import BASEURL from './helper';
import { Quiz } from '../contracts/quiz.contract';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  header = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

  private http = inject(HttpClient)
  public getQuizs() {
    return this.http.get(`${BASEURL}/quiz/`);
  }
  public addQuiz(quiz: any) {
    return this.http.post(`${BASEURL}/quiz/`, quiz)
  }
  public deleteQuizViaId(id: any) {
    return this.http.delete(`${BASEURL}/quiz/${id}`);
  }
  public getQuizById(id: any) {
    return this.http.get(`${BASEURL}/quiz/${id}`)
  }
  public updateQuiz(quiz: any) {
    return this.http.put(`${BASEURL}/quiz/`, quiz)
  }
  //qet active quizzes
  public getActiveQuizzes() {
    return this.http.get(`${BASEURL}/quiz/active`,{headers:this.header});
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(id:string) {
    return this.http.get(`${BASEURL}/quiz/category/active/${id}`,{headers:this.header});
  }
}
