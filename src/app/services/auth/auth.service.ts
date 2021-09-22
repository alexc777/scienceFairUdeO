import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  login() {
    this.guardarLocalStorage('fsdfsdf654654654sf46sd4f');
  }

  isAuth() {
    return this.token ? true : false;
  }

  guardarLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }
}
