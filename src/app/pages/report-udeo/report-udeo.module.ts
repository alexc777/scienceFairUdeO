import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ReportUdeoRoutingModule } from './report-udeo-routing.module';
import { ReportUdeoComponent } from './report-udeo.component';


@NgModule({
  declarations: [
    ReportUdeoComponent
  ],
  imports: [
    CommonModule,
    ReportUdeoRoutingModule,
    NgxChartsModule
  ]
})
export class ReportUdeoModule { }
