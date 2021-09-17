import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProjectComponent } from './detail-project.component';

const routes: Routes = [{ path: '', component: DetailProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailProjectRoutingModule { }
