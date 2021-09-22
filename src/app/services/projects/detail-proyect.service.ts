import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailProyectService {

  arrVotos: any[] = [];

  constructor() { }

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
}
