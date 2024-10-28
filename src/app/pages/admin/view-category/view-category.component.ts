import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
categories = [
  {
    cid:12,
    title:"programing",
    description:"Testing category"
  },
  {
    cid:12,
    title:"programing",
    description:"Testing category"
  },
  {
    cid:12,
    title:"programing",
    description:"Testing category"
  },
  {
    cid:12,
    title:"programing",
    description:"Testing category"
  },
  {
    cid:12,
    title:"programing",
    description:"Testing category"
  },
  {
    cid:12,
    title:"programing",
    description:"Testing category"
  },
]
constructor(private categoryService:CategoryService){}
ngOnInit(){
this.categoryService.categories().subscribe((data:any)=>{
  this.categories = data;
  console.log(this.categories)
},

(error)=>{
  console.log(error);
  
})
}
}
