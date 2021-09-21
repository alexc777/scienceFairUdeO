import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProjectRoutingModule } from './detail-project-routing.module';
import { DetailProjectComponent } from './detail-project.component';

//Plugins
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    DetailProjectComponent
  ],
  imports: [
    CommonModule,
    DetailProjectRoutingModule,
    ShareButtonsModule,
    ShareIconsModule
  ]
})
export class DetailProjectModule { }
