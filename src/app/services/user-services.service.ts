
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  ListUser=[
    {username:"haddoudi",password:"12345"},
    {username:"user1",password:"125"},
    {username:"user2",password:"1245"}
  ]

  constructor() { }
}
