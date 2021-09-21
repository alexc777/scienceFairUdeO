import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit {
   
  arrTeam: any[] = [
    { image: 'assets/img/profile-placeholder.jpg', name: 'Nombre Apellido'},
    { image: 'assets/img/profile-placeholder.jpg', name: 'Nombre Apellido'},
    { image: 'assets/img/profile-placeholder.jpg', name: 'Nombre Apellido'},
    { image: 'assets/img/profile-placeholder.jpg', name: 'Nombre Apellido'},
    { image: 'assets/img/profile-placeholder.jpg', name: 'Nombre Apellido'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
