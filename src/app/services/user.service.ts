import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    return this.httpClient.post(this.url +
      "/api/auth/register", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  login(data: any) {
    return this.httpClient.post(this.url +
      "/api/auth/login", data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  checkToken(){
    return this.httpClient.get(this.url + "/user/checkToken");
  }
}
