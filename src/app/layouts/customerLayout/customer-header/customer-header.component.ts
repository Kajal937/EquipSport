import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrl: './customer-header.component.css'
})
export class CustomerHeaderComponent {
constructor(private router: Router) {}

onLogout() {
  this.router.navigate(['/home'])
  // localStorage.removeItem('authToken');

}
}
