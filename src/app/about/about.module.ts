import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routing';

import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule
  ],
  declarations: [
    AboutComponent
  ]
})

export class AboutModule { }
