import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:5000/auth';

  constructor(private http: HttpClient) {}

  login(user){
    return this.http.post(`${this.url}/login`, user);
  }

  
  register(user){
    return this.http.post(`${this.url}/register`, user);
  }
}
