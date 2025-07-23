import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent {
  employees = [
    { id: 1, name: 'John Doe', department: 'Engineering', status: 'Active', role: 'Developer' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', status: 'On Leave', role: 'Manager' },
    { id: 3, name: 'Robert Johnson', department: 'HR', status: 'Active', role: 'Tester' },
  ];
}
