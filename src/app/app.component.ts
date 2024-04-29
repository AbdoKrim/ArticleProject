import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home',routerLink:"home"},
      {label: 'Articles', icon: 'pi pi-fw pi-book',routerLink:"Articles"},
      {label: 'Add Articles', icon: 'pi pi-fw pi-file-plus',routerLink:"addArticles"},
    ];
  }
}
