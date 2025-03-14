import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient ) { }

  //add user
  public addUser(user:any){
return this.http.post(`${baseUrl}/register`, user);
  }

  public alluser(){
    return this.http.get(`${baseUrl}/users`)
  }

  public allRoleUsers(){
    return this.http.get(`${baseUrl}/roleUsers`)
  }


   //add user
   public contactUs(contact:any){
    return this.http.post(`${baseUrl}/contact/sendInquiry`, contact);
      }
}
