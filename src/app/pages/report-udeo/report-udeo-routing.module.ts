import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportUdeoComponent } from './report-udeo.component';

const routes: Routes = [{ path: '', component: ReportUdeoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportUdeoRoutingModule { }
