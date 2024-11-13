// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';
// import { Product } from '../../models/user';
// // import { DataService } from '../services/data.service';
// // import { Product } from '../models/user';

// @Component({
//   selector: 'app-seller-products',  // Update the selector to match your desired component name
//   templateUrl: './seller-products.component.html',  // Update the file path to match the correct HTML file
// })
// export class SellerProductsComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private dataService: DataService) {}

//   ngOnInit(): void {
//     this.fetchProducts();
//   }

//   fetchProducts(): void {
//     this.dataService.getProducts().subscribe(
//       (data: Product[]) => {
//         this.products = data;
//       },
//       (error) => {
//         console.error('Error fetching products:', error);
//       }
//     );
//   }

//   editProduct(id: number): void {
//     // Your edit logic here
//   }

//   deleteProduct(id: number): void {
//     this.dataService.deleteProduct(id).subscribe(
//       () => {
//         this.products = this.products.filter((product) => product.id !== id);
//       },
//       (error) => {
//         console.error('Error deleting product:', error);
//       }
//     );
//   }  
// }


import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/user';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
})
export class SellerProductsComponent implements OnInit {

  
  products: Product[] = [];
  isModalOpen: boolean = false;  // Controls modal visibility
  selectedProduct: Product = {} as Product;  // Holds the product being edited

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.dataService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // openEditModal(product: Product): void {
  //   this.selectedProduct = { ...product };  // Create a copy of the product to avoid direct mutation
  //   this.isModalOpen = true;  // Open the modal
  // }

  openEditModal(product: Product): void {
    this.selectedProduct = { ...product };
    this.isModalOpen = true;
  }
  

  closeModal(): void {
    this.isModalOpen = false;  // Close the modal
  }

  onEditSubmit(): void {
    this.dataService.updateProduct(this.selectedProduct).subscribe(
      (updatedProduct: Product) => {
        const index = this.products.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
          this.products[index] = updatedProduct;
        }
        this.closeModal(); // Close after edit
      },
      (error) => {
        console.error('Error editing product:', error);
      }
    );
  }

  deleteProduct(id: number): void {
    this.dataService.deleteProduct(id).subscribe(
      () => {
        this.products = this.products.filter((product) => product.id !== id);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}

