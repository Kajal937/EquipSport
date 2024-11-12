import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser, User } from '../models/user'; 
import { SellerProductsComponent } from '../seller/seller-products/seller-products.component';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    apiUrl = 'https://localhost:7232/api/equipment';

    constructor(private http: HttpClient) {}

    // Create or Register User (POST request)
    registerUser(data: User): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, data);
    }

    // Define the login method
    login(data: LoginUser): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, data); // Update the URL as needed
    }
    
    // Fetch products from the API
  getProducts(): Observable<SellerProductsComponent[]> {
    return this.http.get<SellerProductsComponent[]>(`${this.apiUrl}`); // API call to fetch products
  }
}
