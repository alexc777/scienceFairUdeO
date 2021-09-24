import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private adminService: AdminService) {
    this.forma = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.forma.invalid) {
      alert('Asegurate de llenar todos los campos');
    }

    console.log(this.forma.value);
    this.route.navigateByUrl('/adminprojects');

    // this.adminService.login(this.forma.value).subscribe(() => {
    //   this.route.navigateByUrl('/adminprojects');
    // }, (error) => {
    //   console.log(error);
    // })
  }

}
