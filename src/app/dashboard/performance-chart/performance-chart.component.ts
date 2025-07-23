import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.scss'],
})
export class PerformanceChartComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = ['January', 'February', 'March'];
  public barChartData: ChartDataSets[] = [
    { data: [60, 35, 80], label: 'Performance' }
  ];
  public barChartType: ChartType = 'bar';

  public pieChartType: ChartType = 'pie';

  public pieChartData = {
    labels: ['Engineering', 'Marketing', 'HR', 'Sales'],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ['#007bff', '#ffc107', '#28a745', '#dc3545']
    }]
  };
}
