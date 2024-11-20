import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './outer/home/home.component';
import { AboutComponent } from './outer/about/about.component';
import { ContactusComponent } from './outer/contactus/contactus.component';
import { SignupComponent } from './outer/signup/signup.component';
<<<<<<< HEAD
=======
// import { SignInComponent } from './outer/signIn/signIn.component';
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
import { OuterLayoutComponent } from './layouts/outerLayout/outerLayout.component';
import { AdminLayoutsComponent } from './layouts/adminLayout/adminLayout.component';
import { CustomerLayoutComponent } from './layouts/customerLayout/customerLayout.component';
import { HeaderComponent } from './layouts/outerLayout/header/header.component';
import { FooterComponent } from './layouts/outerLayout/footer/footer.component';
import { CustomerFooterComponent } from './layouts/customerLayout/customer-footer/customer-footer.component';
<<<<<<< HEAD
=======
import { OrdersComponent } from './customer/orders/orders.component';
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
import { FavouritesComponent } from './customer/favourites/favourites.component';
import { SignInComponent } from './outer/signIn/signIn.component';
import { SellerFeedbacksComponent } from './seller/seller-feedbacks/seller-feedbacks.component';
import { SellerOrdersComponent } from './seller/seller-orders/seller-orders.component';
<<<<<<< HEAD
=======
import { SellerComponent } from './seller/seller.component';
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
import { SellerLayoutComponent } from './layouts/sellerLayout/sellerLayout.component';
import { UserMangementComponent } from './admin/user-mangement/user-mangement.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { SettingsComponent } from './customer/settings/settings.component';
import { ChatsComponent } from './customer/chats/chats.component';
import { AdminLayoutSidebarComponent } from './layouts/adminLayout/admin-layout-sidebar/admin-layout-sidebar.component';
import { SellerInfoComponent } from './seller/seller-info/seller-info.component';
<<<<<<< HEAD
import { AddressComponent } from './customer/address/address.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
// import { CategoriesComponent } from './outer/categories/categories.component';
import { ProductsComponent } from './admin/products/products.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { FootballComponent } from './admin/football/football.component';
import { SellerComponent } from './admin/seller/seller.component';
import { OrdersComponent } from './admin/orders/orders.component';
=======
import { SellerProductsComponent } from './seller/seller-products/seller-products.component';
import { AddressComponent } from './customer/address/address.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
// import { Category1Component } from './admin/category1/category1.component';
// import { Category2Component } from './admin/category2/category2.component';
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0


// Define routes
const routes: Routes = [
  {
    path: '', // Main route for outer layout
    component: OuterLayoutComponent, // Use Outer Layout
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contactus', component: ContactusComponent },
<<<<<<< HEAD
      { path: 'signIn', component: SignInComponent },
=======
      { path: 'signIn', component: SignInComponent },  
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
      { path: 'signup', component: SignupComponent },
      { path: 'admin-login', component: AdminLoginComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default to Home
    ],
  },

<<<<<<< HEAD
  // *************************************CustomerLayoutComponent*************************
  {
    path: 'customer',
    component: CustomerLayoutComponent,
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'address', component: AddressComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'chats', component: ChatsComponent },
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
    ],
  },
=======

// *************************************CustomerLayoutComponent*************************
{
  path: 'customer',
  component: CustomerLayoutComponent,
  children: [
    { path: 'orders', component: OrdersComponent },
    { path: 'address', component: AddressComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'chats', component: ChatsComponent },
    // { path: 'favourites', component: FavouritesComponent },
    // { path: 'profile', component: ProfileComponent },
    // { path: 'settings', component: SettingsComponent },
    { path: '', redirectTo: 'orders', pathMatch: 'full' }  // Default route for customer
  ],
},
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0

  // ***************************************SellerLayout*********************************
  {
    path: 'seller',
    component: SellerLayoutComponent,
    children: [
      { path: 'seller-info', component: SellerInfoComponent },
<<<<<<< HEAD
      { path: 'seller-orders', component: SellerOrdersComponent }, 
      { path: 'seller-feedbacks', component: SellerFeedbacksComponent },
      { path: '', redirectTo: 'seller-orders', pathMatch: 'full' }, 
    ],
  },

  // *************************************AdminLayout******************************
  {
    path: 'admin',
    component: AdminLayoutsComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'admin-categories', component: AdminCategoriesComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'seller', component: SellerComponent },
      { path: 'user-mangement', component: UserMangementComponent },
     { path: 'football', component: FootballComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    ],
  },
];

=======
      { path: 'seller-orders', component: SellerOrdersComponent }, // Corrected this line
      { path: 'seller-products', component: SellerProductsComponent },
      { path: 'seller-feedbacks', component: SellerFeedbacksComponent },
      { path: '', redirectTo: 'seller-orders', pathMatch: 'full' }  // Default route for seller
    ]
  },
  

// *************************************AdminLayout******************************
  {
    path: 'admin', 
    component: AdminLayoutsComponent, 
    children: [
      { path: 'user-mangement', component: UserMangementComponent },
      // { path: 'category1', component: Category1Component }, // Add category route
      // { path: 'category2', component: Category2Component}, // Add category route
      // { path: 'category3', component: Category3Component }, // Add category route
      { path: '', redirectTo: 'user-mangement', pathMatch: 'full' },
    ],
  },
 
];


>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
<<<<<<< HEAD
=======









// const routes: Routes = [
//   {
//     path: '', // Main route for outer layout
//     // component: OuterLayoutComponent, // Use Outer Layout
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//       // { path: 'products', component: ProductsComponent },
//       { path: 'contactus', component: ContactusComponent },
//       { path: 'signin', component: SignInComponent },
//       { path: 'signup', component: SignupComponent },
//       { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default to Home
//     ],
//   },
//   {
//     path: 'admin', // Route for admin layout
//     // component: AdminLayoutComponent, // Use Admin Layout
//     children: [
//       // { path: 'dashboard', component: AdmindashboardComponent },
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//     ],
//   },
//   { path: '**', redirectTo: '/home' }, // Fallback route
// ];










// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// // Import components
// import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
// import { HomeComponent } from './outer/home/home.component';
// import { AboutComponent } from './outer/about/about.component';
// import { ProductsComponent } from './outer/products/products.component';
// import { ContactusComponent } from './outer/contactus/contactus.component';
// import { LoginComponent } from './outer/login/login.component';
// import { SignupComponent } from './outer/signup/signup.component';
// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { OuterLayoutComponent } from './layouts/outer-layout/outer-layout.component';

// // Define routes
// const routes: Routes = [
//   {
//     path: '', // Main route
//     component: OuterLayoutComponent, // Use Outer Layout
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//       { path: 'product', component: ProductsComponent },
//       { path: 'contactus', component: ContactusComponent },
//       { path: 'login', component: LoginComponent },
//       { path: 'signup', component: SignupComponent },
//     ],
//   },
//   {
//     path: 'admin', // Admin route
//     component: AdminLayoutComponent, // Use Admin Layout
//     children: [
//       { path: 'dashboard', component: AdmindashboardComponent },
//     ],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
