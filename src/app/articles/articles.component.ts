import {Component, OnInit} from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {Article} from "../model/articles.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit{
  ListArticles:Array<Article>=[]
  private items: ({ icon: string; label: string; } | { icon: string; label: string; })[] | undefined;
  constructor(private articlesService:ArticlesService,private router:Router) {
  }
  ngOnInit(){
    this.ListArticles=this.articlesService.ListArticles

  }

  deleteArticle(article: any) {
    let index=this.articlesService.ListArticles.indexOf(article)
    this.articlesService.ListArticles=this.articlesService.ListArticles.filter((e, i) => i !== index);
    this.ListArticles=this.articlesService.ListArticles

  }
  editArticle(article: Article) {
    this.router.navigate(['/addArticles', article.id]);
  }
}
