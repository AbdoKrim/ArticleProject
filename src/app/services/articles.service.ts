import { Injectable } from '@angular/core';
import {Article} from "../model/articles.model";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  ListArticles:Array<Article>=[
    {id:1,name:"article1",price:280,color:"blue"},
    {id:2,name:"article1",price:450,color:"blue"},
    {id:3,name:"article1",price:300,color:"blue"},
    {id:4,name:"article1",price:250,color:"blue"},
  ]

  constructor() { }
}
