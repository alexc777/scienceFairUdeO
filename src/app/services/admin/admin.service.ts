import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { ErrorsService } from '../handleError/errors.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private errorService: ErrorsService) { }

  get headersPost() {
    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      })
    }
  }

  get headers() {
    return {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })
    }
  }

  login(formData: any) {
    const body = new HttpParams()
      .set('username', formData.username)
      .set('password', formData.password)

    const url = 'http://desasoft2-001-site1.htempurl.com/site/rest';

    return this.http.post(url, body, this.headersPost).pipe(
      tap((resp: any) => {
        console.log(resp);
      }), catchError((err) => {
        return this.errorService.handleError(err);
      })
    );
  }

  getCategorias() {

    const url = 'http://desasoft2-001-site1.htempurl.com/site/rest/categoria';

    return this.http.get(url, this.headers).pipe(
      tap((resp: any) => {
        console.log(resp);
      }), catchError((err) => {
        return this.errorService.handleError(err);
      })
    );
  }
}
