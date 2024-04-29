import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import {TableModule} from "primeng/table";
import {TabMenuModule} from "primeng/tabmenu";
import {CardModule} from "primeng/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {ChipsModule} from "primeng/chips";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    AddArticleComponent,
    DetailArticleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TabMenuModule,
    CardModule,
    ReactiveFormsModule,
    ButtonModule,
    InputGroupModule,
    ChipsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
