import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ArticlesService} from "../services/articles.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  formArticle:any
  articleId:number=0 ;
  ismodifier:boolean=false


  constructor(private fb:FormBuilder,private articlesService:ArticlesService,private router:Router,    private route: ActivatedRoute) {
    this.articleId = parseInt(this.route.snapshot.paramMap.get('id')!);
    const article = this.articlesService.ListArticles.find(a => a.id === this.articleId);
    if (article) {
      this.ismodifier=true;
      this.formArticle = this.fb.group({
        id:[this.articleId],
        name: [article.name, Validators.required],
        price: [article.price, Validators.required],
        color: [article.color, Validators.required],
      });

    }else{
      this.formArticle=this.fb.group(
        {
          id:[1 + this.articlesService.ListArticles[this.articlesService.ListArticles.length-1].id],
          name:['',Validators.required],
          price:[0,Validators.required],
          color:['',Validators.required]
        }


  )
  }
  }
  onInit(){

  }



  AddArticle() {
    let name1 = this.formArticle.getRawValue()
    console.log(name1)
    this.articlesService.ListArticles.push(name1)
    console.log(this.articlesService.ListArticles)
    this.router.navigate(['/Articles']);
  }
  updateArticle(){

    let index = this.articlesService.ListArticles.findIndex(
      article => article.id === this.articleId
    );
    let name1 = this.formArticle.getRawValue()
    console.log(name1)
    this.articlesService.ListArticles.push(name1)

    if (index !== -1) {
      this.articlesService.ListArticles[index] = name1

    } else {
      console.error("L'article à modifier n'a pas été trouvé.");
    }
    this.router.navigate(['/Articles']);

  }

  OnSubmit() {
    if(this.ismodifier){
      this.updateArticle()
    }else{
      this.AddArticle()

    }
  }
}
