import { Component } from '@angular/core';
import { Product } from '../../models/user';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrl: './seller-products.component.css'
})
export class SellerProductsComponent {


  products: Product[] = [];
}
