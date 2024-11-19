import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoginUser } from '../../models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css'],
})
export class SignInComponent {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    roleId: new FormControl<number>(0, [Validators.required]), // Ensure roleId is a number
  });

  selectedTab: string = 'seller'; // Default tab selection

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  // Getter for email
  get email() {
    return this.signInForm.get('email');
  }

  // Getter for password
  get password() {
    return this.signInForm.get('password');
  }

  // Getter for roleId
  get roleId() {
    return this.signInForm.get('roleId');
  }

  // Method to handle the user role tab selection
  // selectTab(tab: string) {
  //   this.selectedTab = tab;
  //   // Set the roleId based on the tab selection
  //   if (tab === 'customer') {
  //     this.signInForm.get('roleId')?.setValue(2); // Customer role
  //   } else if (tab === 'seller') {
  //     this.signInForm.get('roleId')?.setValue(3); // Seller role
  //   }
  // }

  // Method to handle sign-in
  signInUser() {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    const loginUser = this.signInForm.value as LoginUser;

    // Prepare login data with roleId passed as a number
    // const loginData: LoginUser = {
    //   email: this.signInForm.value.email || '',
    //   password: this.signInForm.value.password || '',
    //   roleId: this.signInForm.value.roleId ?? 0, // Ensure roleId is set properly
    // };

    this.authService.login(loginUser).subscribe(
      (response) => {
        console.log('Login successful', response);
        if (loginUser.roleId === 2) {
          this.router.navigate(['customer']);
          // Redirect to customer dashboard
        } else if (loginUser.roleId === 3) {
          this.router.navigate(['seller']); // Correct if route exists

          console.log('Navigating to seller');
        }
        this.snackBar.open('Login successful', 'Close', { duration: 3000 });
      },
      (error) => {
        console.error('Login failed', error);
        this.snackBar.open('Login failed', 'Close', { duration: 3000 });
      }
    );
  }
}
