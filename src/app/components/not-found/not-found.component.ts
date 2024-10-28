import { Component, inject } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  randomImg:string | null = null;
   
  private imageService = inject(ImageService);
  ngOnInit(){
    this.imageService.fetchImage()
    .then(url =>{
      this.randomImg = url
    })
    .catch(error =>{
      console.log("error imagee fetching...",error)
    })
  }
  
}
