import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout-sidebar',
  templateUrl: './admin-layout-sidebar.component.html',
  styleUrls: ['./admin-layout-sidebar.component.css']
})
export class AdminLayoutSidebarComponent {
  isDropdownOpen = false; // Track the dropdown's state

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle the dropdown state
  }
}
