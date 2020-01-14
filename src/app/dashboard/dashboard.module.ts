import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes } from './dashboard.routing';
import { Home2Component } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoutingComponent } from './routing/routing.component';
import { AccordionGroupComponent } from './accordion/accordion-group.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CounterModule } from 'ngx-counter';
import { RegisterPassengerComponent } from './register-passenger/register-passenger.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComboBoxComponent } from './combo-box/combo-box.component';

@NgModule({
  declarations: [IndexComponent, Home2Component, AboutComponent, RoutingComponent, AccordionGroupComponent, AccordionComponent, RegisterPassengerComponent, ComboBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashBoardRoutes),
    CounterModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [IndexComponent],
})
export class DashboardModule { }
