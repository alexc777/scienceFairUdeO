import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ReportProjectsRoutingModule } from './report-projects-routing.module';
import { ReportProjectsComponent } from './report-projects.component';


@NgModule({
  declarations: [
    ReportProjectsComponent
  ],
  imports: [
    CommonModule,
    ReportProjectsRoutingModule,
    NgxChartsModule
  ]
})
export class ReportProjectsModule { }
