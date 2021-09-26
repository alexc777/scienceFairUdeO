import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { DetailProyectService } from '../../services/projects/detail-proyect.service';
import { FirelService } from 'src/app/services/projects/fire.service';
import Swal from 'sweetalert2'
import Voto from './models/voto';
@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {

  routeParams: any;
  objProject: any = {};
  activeModal = false;
  email: any = 'admin';

  isExist = false;

  constructor(private authServices: AuthService,
    private authservice: AuthService, private router: ActivatedRoute, private detailServices: DetailProyectService, private _fireService: FirelService) { }

  ngOnInit(): void {
    this.getParams();
    this.getProjects();
  }

  sendVoute(p_valor: any): any {
    if (this.objProject) {

      if (!this.authServices.isAuth()) {
        this.toggleModal();
        return;
      }

      this.isExist = this.detailServices.validVoute(this.routeParams.slug);

      if (this.isExist) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ya has votado por este proyecto',
          showConfirmButton: true
        });

        return;
      } else {

        if (p_valor == 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Voto realizado con exito',
            showConfirmButton: true
          });

        } else {
          let voto: Voto = {}
          voto.slug = this.objProject.slug;
          voto.valor = p_valor;
          this.email = localStorage.getItem('email');
          voto.usuario = this.email;
          this._fireService.addVoto(voto);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Voto realizado con exito',
            showConfirmButton: true

          });
        }
      }

    } else {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Lo sentimos, no puedes votar por este proyecto',
        showConfirmButton: true

      })
    }
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
    });
  }

  getProjects() {
    this.detailServices.getProjects(this.routeParams.slug).subscribe((data: any) => {
      this.objProject = data;
    }, (error: any) => {
      console.log('Error: ', error);
    })
  }

}
