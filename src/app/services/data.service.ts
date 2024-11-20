import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLoginUser, LoginUser, Product, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseApiUrl = 'https://localhost:7232/api'; // Base URL for API endpoints

  constructor(private http: HttpClient) {}

  // User Registration (POST request)
  registerUser(data: User): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/Equipment/register`, data);
  }

  // User Login (POST request)
 
// For normal user login
loginUser(data: LoginUser): Observable<any> {
  return this.http.post(`${this.baseApiUrl}/users/login`, data);
}

// For admin login
loginAdmin(data: AdminLoginUser): Observable<any> {
  return this.http.post(`${this.baseApiUrl}/Equipment/adminloginlogin`, data); // Corrected the endpoint URL
}


  // Get all products (GET request)
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseApiUrl}/seller`);
  }

  // Add a new product (POST request)
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseApiUrl}/seller`, product);
  }

  // Update an existing product (PUT request)
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseApiUrl}/seller/${product.id}`, product);
  }

  // Delete a product (DELETE request)
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}/seller/${id}`);
  }
}
