import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShellRoutingModule } from './app-shell-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AppShellRoutingModule
  ]
})
export class AppShellModule { }
