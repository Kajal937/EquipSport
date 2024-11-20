import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLoginUser, Category, LoginUser, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseApiUrl = 'https://localhost:7232/api'; // Base URL for API endpoints

  constructor(private http: HttpClient) {}

  // User Registration (POST request)
  registerUser(data: User): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/Equipment/register`, data);
  }

  // For normal user login
  loginUser(data: LoginUser): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/users/login`, data);
  }

  // For admin login
  loginAdmin(data: AdminLoginUser): Observable<any> {
    return this.http.post(`${this.baseApiUrl}/Equipment/adminlogin`, data); // Corrected endpoint URL
  }








  
  // Category data for admin layout
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseApiUrl}/AdminSeller/allcategory`);
  }

  // Add a new category (POST request)
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseApiUrl}/AdminSeller/allcategory`, category);
  }

  // Update an existing category (PUT request)
  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(
      `${this.baseApiUrl}/AdminSeller/allcategory/${category.categoryId}`, 
      category
    );
  }

  // Delete a category (DELETE request)
  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}/AdminSeller/allcategory/${id}`);
  }
}
