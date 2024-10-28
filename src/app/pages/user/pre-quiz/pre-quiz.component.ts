import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pre-quiz',
  templateUrl: './pre-quiz.component.html',
  styleUrls: ['./pre-quiz.component.css']
})
export class PreQuizComponent {

  qid: any;
  quiz: any;
  private activatedRoute = inject(ActivatedRoute)
  private quizService = inject(QuizService)
  private router = inject(Router)

  ngOnInit() {
    this.qid = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.qid)
    this.quizService.getQuizById(this.qid).subscribe(data => {
      console.log(data)
      this.quiz = data;
    }, err => {
      console.log(err)
    })
  }
  startQuiz() {
    Swal.fire({
      title: 'Do you want to start the quiz?',

      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't save`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/' + this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
