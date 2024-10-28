import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {
  private matSnack = inject(MatSnackBar)
  quizList: any = [];
  private quizService = inject(QuizService)
  ngOnInit() {
    this.quizService.getQuizs().subscribe(
      (data) => {
        this.quizList = data;
        console.log(this.quizList)
      },
      (err) => {
        console.log(err);
      }
    )

  }

  deleteQuiz(id: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then((res) => {
      if (res.isConfirmed) {
        this.quizService.deleteQuizViaId(id).subscribe(
          (data) => {
            this.quizList = this.quizList.filter((quiz: any) => quiz.qId !== id);
            this.matSnack.open('Quiz Deleted !', 'ok', {
              duration: 3000
            })
          }, (err) => {
            this.matSnack.open('Error in deleting quiz !', 'error', {
              duration: 3000
            })
          }
        )
      }
    })
  }



}
