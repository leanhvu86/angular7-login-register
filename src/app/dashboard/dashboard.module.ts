import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes } from './dashboard.routing';
import { AddPassengerTicketComponent } from './add-passenger-ticket/add-passenger-ticket.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { Home2Component } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoutingComponent } from './routing/routing.component';
import { AccordionGroupComponent } from './accordion/accordion-group.component';
import { AccordionComponent } from './accordion/accordion.component';
@NgModule({
  declarations: [IndexComponent, AddPassengerTicketComponent, Home2Component, AboutComponent, RoutingComponent, AccordionGroupComponent, AccordionComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    RouterModule.forChild(DashBoardRoutes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [IndexComponent],
})
export class DashboardModule { }
