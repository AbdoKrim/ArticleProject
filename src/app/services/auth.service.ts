import { Injectable } from '@angular/core';
import {UserServicesService} from "./user-services.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;

  constructor(private userServices: UserServicesService) {}

  login(username: string, password: string): boolean {
    const user = this.userServices.ListUser.find(
      (u) => u.username === username && u.password === password
    );
    this._isAuthenticated = !!user;
    return this._isAuthenticated;
  }

  logout() {
    this._isAuthenticated = false;
  }

  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

}
