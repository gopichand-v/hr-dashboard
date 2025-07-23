import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
 isAttendanceOpen = false;
  isSettingsOpen = false;
  isRecruitmentOpen = false;

  toggleAttendance() {
    this.isAttendanceOpen = !this.isAttendanceOpen;
  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  toggleRecruitment() {
    this.isRecruitmentOpen = !this.isRecruitmentOpen;
  }
}

