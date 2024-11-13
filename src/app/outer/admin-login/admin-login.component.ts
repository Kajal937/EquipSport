import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoginUser } from '../../models/user';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  // Define the form group for email and password
  AdminForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Email field with required and email validation
    password: new FormControl('', [Validators.required]), // Password field with required validation
    roleId: new FormControl<number>(1, [Validators.required]), // Ensure roleId is a number
  });

  constructor(
    private authService: AuthService,  // To handle authentication service
    private snackBar: MatSnackBar,     // To show notifications (snack bar)
    private router: Router             // To navigate to other routes after login
  ) {}

  // Getter for email control
// Correcting the form reference
get email() {
  return this.AdminForm.get('email');
}

get password() {
  return this.AdminForm.get('password');
}


get roleId() {
  return this.AdminForm.get('roleId');
}
  // Method to handle sign-in form submission
  signInUser() {
    // Check if the form is invalid, if so mark all fields as touched to show errors
    if (this.AdminForm.invalid) {
      this.AdminForm.markAllAsTouched();
      return;
    }

    // Extract the form values and typecast to LoginUser model
    const loginUser = this.AdminForm.value as LoginUser;

    // Call the login method from the auth service
    this.authService.login(loginUser).subscribe(
      (response) => {
        console.log('Login successful', response);
    
        if (loginUser.roleId === 1) {
          // If the user is an admin, navigate to the admin dashboard
          this.router.navigate(['admin']);
        } else {
          // If the role is not 1, log a message or handle the other cases
          console.log('Role not recognized');
        }
        
        // Show a success message using the Snackbar
        this.snackBar.open('Login successful', 'Close', { duration: 3000 });
      },
      (error) => {
        // If login failed, log the error and show a failure message
        console.error('Login failed', error);
        this.snackBar.open('Login failed', 'Close', { duration: 3000 });
      }
    );
    
  }
}
