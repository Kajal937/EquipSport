// src/app/models/user.ts

// Interface for User
export interface User {
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
  password: string;
  gender: string;
  roleId: number;
}

  
  // Interface for LoginUser
  export interface LoginUser {
    email: string;
    password: string;
    roleId: number; // Make sure this is a number
  }
  