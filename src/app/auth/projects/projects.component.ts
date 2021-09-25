import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  isShowList = false;

  arrCategory: any;

  forma: FormGroup;
  isImageSaved: boolean = false;
  cardImageBase64: string = '';

  constructor(private fb: FormBuilder, private route: Router, private adminService: AdminService) {
    this.forma = this.fb.group({
      categoria   : ['', [Validators.required]],
      nombre      : ['', [Validators.required]],
      horario     : ['', [Validators.required]],
      live        : ['', [Validators.required]],
      descripcion : ['', [Validators.required]],
      imagen      : ['', [Validators.required]],
    });

    // this.listarCategorias();
  }

  toggle(param:string) {
    if (param === 'new') {
      this.isShowList = false;
    } else {
      this.isShowList = true;
    }
  }

  fileChangeEvent(fileInput: any) : any {
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

  crearProyecto() {
    if (this.forma.invalid) {
      alert('Asegurate de llenar todos los campos');
      return;
    }

    console.log(this.forma.value);
    // console.log('base64: ', this.cardImageBase64);
  }

  listarCategorias() {
    this.adminService.getCategorias().subscribe(categories => {
      console.log('succes: ', categories);
    }, (error) => {
      console.log('Error: ', error);
    })
  }

}
