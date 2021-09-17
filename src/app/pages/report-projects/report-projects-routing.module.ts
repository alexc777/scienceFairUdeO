import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportProjectsComponent } from './report-projects.component';

const routes: Routes = [{ path: '', component: ReportProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportProjectsRoutingModule { }
