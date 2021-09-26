import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public email: any = '';
  constructor(private auth: AngularFireAuth) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  async login() {
    this.googleLogin()
      .then((user) => {
        console.log(user);
        if (user) {
          localStorage.setItem('email', user.email ? user.email : '');
        }
        this.guardarLocalStorage(user?.refreshToken);
      })
      .catch((error) => {
        console.info('Auth Error', error);
      });
  }

  getUser() {
    return this.email;
  }
  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
    return credential.user;
  }

  isAuth() {
    return this.token ? true : false;
  }

  guardarLocalStorage(token?: string) {
    const result = token ? token : '';
    localStorage.setItem('token', result);
  }


  logout() {
    this.auth.signOut();
    localStorage.removeItem('token');
  }
}
