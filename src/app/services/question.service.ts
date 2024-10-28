import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private http = inject(HttpClient);

  public getQuestionOfQuizById(id: any) {
    return this.http.get(`${BASEURL}/question/quiz/${id}`)
  }
  public addNewQuestion(question: any) {
    return this.http.post(`${BASEURL}/question/`, question)
  }
  public deleteQuestion(id: any) {
    return this.http.delete(`${BASEURL}/question/${id}`)
  }
  public getQuestionsOfQuiz(id: any) {
    return this.http.get(`${BASEURL}/question/quiz/all/${id}`);
  }

  public getQuestionsOfQuizForTest(id: any) {
    return this.http.get(`${BASEURL}/question/quiz/${id}`);
  }
  public evalQuiz(questions:any) {
    return this.http.post(`${BASEURL}/question/eval-quiz`, questions);
  }
}
