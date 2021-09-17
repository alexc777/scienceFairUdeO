import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProjectsRoutingModule } from './list-projects-routing.module';
import { ListProjectsComponent } from './list-projects.component';


@NgModule({
  declarations: [
    ListProjectsComponent
  ],
  imports: [
    CommonModule,
    ListProjectsRoutingModule
  ]
})
export class ListProjectsModule { }
