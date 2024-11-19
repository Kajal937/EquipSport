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
  

   // Interface for AdminLoginUser
   export interface AdminLoginUser {
    email: string;
    password: string;
    roleId: number; // Make sure this is a number
  }
  
  // export interface Product {
  //   id: number;
  //   productName: string; // Use camelCase for consistency
  //   category: string;
  //   price: number;
  //   status: string;
  //   imageUrl: string;
  // }
  


  export interface Category {
    categoryId: number; // Ensure this is 'number' if the backend returns a number
    name: string;
    description: string;
    createdAt: Date;
    categoryStatus: string;
  }
  