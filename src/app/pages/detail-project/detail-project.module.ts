import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProjectRoutingModule } from './detail-project-routing.module';
import { DetailProjectComponent } from './detail-project.component';


@NgModule({
  declarations: [
    DetailProjectComponent
  ],
  imports: [
    CommonModule,
    DetailProjectRoutingModule
  ]
})
export class DetailProjectModule { }
