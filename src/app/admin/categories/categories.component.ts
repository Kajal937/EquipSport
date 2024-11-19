import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: string[] = ['Football', 'Basketball', 'Cricket', 'Tennis', 'Hockey'];
  dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: string) {
    console.log('Selected Category:', category);
    this.dropdownOpen = false; // Close dropdown after selecting a category
  }
}
