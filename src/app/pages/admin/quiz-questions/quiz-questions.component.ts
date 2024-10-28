import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent {
  qId: any;
  title: any;
  questions: any = [];

  private route = inject(ActivatedRoute);
  private questionService = inject(QuestionService);
  private matSnack = inject(MatSnackBar);

  ngOnInit() {
    this.qId = this.route.snapshot.paramMap.get('id')
    this.title = this.route.snapshot.paramMap.get('title')
    console.log(this.title)
    // alert(this.qId + ": " + this.title)
    this.questionService.getQuestionOfQuizById(this.qId).subscribe((data: any) => {
      this.questions = data;
      console.log(this.questions)
    },
      err => console.log(err)
    )

  }
  deleteQuestion(id: any) {
    
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure to Delete ?'
    }).then(
      (res) => {
        if (res.isConfirmed) {
          this.questionService.deleteQuestion(id).subscribe(
            (data) => {
              this.matSnack.open('Question Deleted Successfully ', 'ok', {
                duration: 3000
              });
              this.questions = this.questions.filter((q:any)=> q.quesId == id)
            },(err) =>{
              this.matSnack.open('Failed to Delete question','',{
                duration:3000
              })
            }
          )
        }
      }
    )
  }

}
