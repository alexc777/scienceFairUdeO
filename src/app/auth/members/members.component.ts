import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent {


  forma: FormGroup;
  routeParams: any;
  isImageSaved: boolean = false;
  cardImageBase64: string = '';

  constructor(private fb: FormBuilder, private route: Router, private adminService: AdminService, private router: ActivatedRoute) {
    this.forma = this.fb.group({
      tipo   : ['', [Validators.required]],
      nombre   : ['', [Validators.required]],
      apellido : ['', [Validators.required]],
      imagen   : ['', [Validators.required]],
    });

    this.getParams();
  }

  fileChangeEvent(fileInput: any): any {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs: any) => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;

          // console.log('base64: ', this.cardImageBase64);
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  crearMiembro() {
    if (this.forma.invalid) {
      alert('Asegurate de llenar todos los campos');
      return;
    }

    const info = this.forma.value;

    if (info.tipo === 'alumno') {
      console.log('Consumir API para crear integrante alumno');
    } else if (info.tipo === 'docente') {
      console.log('Consumir API para crear integrante docente');
    }

    console.log(info);
    // console.log(`Imagen del ${info.tipo}: `, this.cardImageBase64);
  }

  getParams() {
    this.router.params.subscribe(params => {
      this.routeParams = params;
      console.log('ID Proyecto: ', this.routeParams);
    });
  }

}
