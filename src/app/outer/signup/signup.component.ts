import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  roles = [
    { displayName: 'Customer', value: 2 },
    { displayName: 'Seller', value: 3 }
  ];



  
  signUpForm = new FormGroup({
     firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    roleId: new FormControl('', [Validators.required]) // Consistent naming

  });

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {}

  // signUpUser() {
  //   if (this.signUpForm.valid) {
  //     // const userData: User = this.signUpForm.value as User;
  //     this.dataService.registerUser(userData).subscribe(
  //       (response) => {
  //         this.snackBar.open('Registered successfully', 'Close', { duration: 3000 });
  //         this.signUpForm.reset();
  //       },
  //       (error) => {
  //         this.snackBar.open('Registration failed. Try again.', 'Close', { duration: 3000 });
  //       }
  //     );
  //   } else {
  //     this.signUpForm.markAllAsTouched();
  //   }
  // }

  signUpUser() {
    if (this.signUpForm.valid) {
      // Define the userData object based on the form values
      const userData: User = {
        firstname: this.signUpForm.value.firstname || '',
        lastname: this.signUpForm.value.lastname || '',
        email: this.signUpForm.value.email || '',
        gender: this.signUpForm.value.gender || '',
        mobileNumber: this.signUpForm.value.mobileNumber || '',
        password: this.signUpForm.value.password || '',
        roleId: Number(this.signUpForm.value.roleId) || 0
      };

      // Pass the userData object to the registerUser method
      this.dataService.registerUser(userData).subscribe(
        (response) => {
          this.snackBar.open('Registered successfully', 'Close', { duration: 3000 });
          this.signUpForm.reset();
        },
        (error) => {
          this.snackBar.open('Registration failed. Try again.', 'Close', { duration: 3000 });
        }
      );
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }


}
