import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { DetailProyectService } from '../../services/projects/detail-proyect.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  routeParams:any;
  objProject:any = {};
  activeModal = false;

  isExist = false;

  constructor(private authServices: AuthService, private router: ActivatedRoute, private detailServices: DetailProyectService) { }

  ngOnInit(): void {
    this.getParams();
    this.getProjects();
  }

  sendVoute(): any {
    if (!this.authServices.isAuth()) {
      this.toggleModal();
      return;
    }

    this.isExist = this.detailServices.validVoute(this.routeParams.slug);

    if (this.isExist) {
      console.log('Ya has votado por este proyecto');
      return 0;
    }

    console.log('Voto exitoso');
  }

  toggleModal() {
    this.activeModal = !this.activeModal;
  }

  loginGoogle() {
    this.authServices.login();
    this.toggleModal();
  }

  getParams() {
    this.router.params.subscribe(params => {
      this.routeParams = params;
      console.log(this.routeParams);
    });
  }

  getProjects() {
    this.detailServices.getProjects(this.routeParams.slug).subscribe((data:any) => {
      this.objProject = data;
    },(error: any) => {
      console.log('Error: ', error);
    })
  }

}
