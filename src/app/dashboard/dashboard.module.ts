import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes } from './dashboard.routing';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashBoardRoutes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [IndexComponent],
})
export class DashboardModule { }
