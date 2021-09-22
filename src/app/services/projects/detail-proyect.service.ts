import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from '../handleError/errors.service';

@Injectable({
  providedIn: 'root'
})
export class DetailProyectService {

  arrVotos: any[] = [];

  constructor(private http: HttpClient, private errorService: ErrorsService) { }

  validVoute(slugProject: string) : boolean {
    let votosStorage: any = localStorage.getItem("votos") || [];

    if (votosStorage.length > 0) {
      this.arrVotos = JSON.parse(votosStorage);
    }

    const projectExist = this.arrVotos.find(project => project === slugProject ? project : '');

    if (projectExist) {
      return true;
    }

    this.arrVotos.push(slugProject);
    this.saveVoute();
    return false;
  }

  saveVoute() {
    localStorage.setItem('votos', JSON.stringify(this.arrVotos));
  }

  getProjects(slug: string): Observable<any> {
    const url = 'assets/data/projects.json';

    return this.http.get(url).pipe(
      map((resp: any) => {
        const projectInfo = resp.projects.find((objProject: any) => objProject.slug === slug ? objProject : '');

        return projectInfo;

      }), catchError((err) => {
        return this.errorService.handleError(err);
      })
    );
  }
}
