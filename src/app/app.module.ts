import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EmployeeTableComponent } from './dashboard/employee-table/employee-table.component';
import { PerformanceChartComponent } from './dashboard/performance-chart/performance-chart.component';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    TopNavbarComponent,
    FooterComponent,
    EmployeeTableComponent,
    PerformanceChartComponent,
  ],
  imports: [ChartsModule, AppRoutingModule, BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
