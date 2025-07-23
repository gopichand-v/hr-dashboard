import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerformanceChartComponent } from './dashboard/performance-chart/performance-chart.component';
import { EmployeeTableComponent } from './dashboard/employee-table/employee-table.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'performance', component: PerformanceChartComponent },
  { path: 'employees', component: EmployeeTableComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }