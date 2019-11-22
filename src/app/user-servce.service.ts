import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 
import {UserInfo} from "../app/user-info";
@Injectable({
  providedIn: 'root'
})
export class UserServceService {
  Url :string;  
  constructor(private http: HttpClient) { 
    this.Url = "http://localhost:57171/api/";
  }
  CreateUser(userInfo: UserInfo)
  {
    return this.http.post<UserInfo>(this.Url + '/User/', userInfo); 
  }
  GetUserDetails()
  {
    return this.http.get<UserInfo[]>(this.Url +'/User/UserInfo');
  }
  DeleteUserId(id: number)
  {
    return this.http.delete<UserInfo>(this.Url + '/User/DeleteUser/' + id);
  }
}
