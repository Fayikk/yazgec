import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/categorymodel';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[]
  constructor(private categoryService:CategoryService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory()
  }
  getCategory(){
    this.categoryService.getCategory()
    .subscribe(Response=>{this.categories=Response.data});
  }
}
