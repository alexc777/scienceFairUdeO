import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportProjectsRoutingModule } from './report-projects-routing.module';
import { ReportProjectsComponent } from './report-projects.component';


@NgModule({
  declarations: [
    ReportProjectsComponent
  ],
  imports: [
    CommonModule,
    ReportProjectsRoutingModule
  ]
})
export class ReportProjectsModule { }
