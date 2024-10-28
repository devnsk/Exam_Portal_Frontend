import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {
  catId: any;
  allquiz: any;
  private activatedRoute = inject(ActivatedRoute)
  private quizService = inject(QuizService)
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params)
      this.catId = params;
      if (this.catId.catId == 0) {
        console.log('load all quiz')
        this.quizService.getActiveQuizzes().subscribe((data) => {
          this.allquiz = data;
          console.log(this.allquiz)
        }, (err) => {
          console.log(err)
        })
      } else {
        console.log('load specific quiz')
        console.log(this.catId)
        
        this.quizService.getActiveQuizzesOfCategory(this.catId.catId).subscribe((data:any) => {
          this.allquiz = data;

        }, err => console.log('error loading quiz  data'))

      }
    })
  }
}