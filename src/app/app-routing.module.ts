import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {AddArticleComponent} from "./add-article/add-article.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./auth.guard";


const routes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate: [authGuard]},
  { path: 'Articles', component: ArticlesComponent, canActivate: [authGuard] },
  { path: 'addArticles', component: AddArticleComponent, canActivate: [authGuard] },
  { path: 'addArticles/:id', component: AddArticleComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
