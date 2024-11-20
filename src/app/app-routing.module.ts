import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './outer/home/home.component';
import { AboutComponent } from './outer/about/about.component';
import { ContactusComponent } from './outer/contactus/contactus.component';
import { SignupComponent } from './outer/signup/signup.component';
import { OuterLayoutComponent } from './layouts/outerLayout/outerLayout.component';
import { AdminLayoutsComponent } from './layouts/adminLayout/adminLayout.component';
import { CustomerLayoutComponent } from './layouts/customerLayout/customerLayout.component';
import { HeaderComponent } from './layouts/outerLayout/header/header.component';
import { FooterComponent } from './layouts/outerLayout/footer/footer.component';
import { CustomerFooterComponent } from './layouts/customerLayout/customer-footer/customer-footer.component';
import { FavouritesComponent } from './customer/favourites/favourites.component';
import { SignInComponent } from './outer/signIn/signIn.component';
import { SellerFeedbacksComponent } from './seller/seller-feedbacks/seller-feedbacks.component';
import { SellerOrdersComponent } from './seller/seller-orders/seller-orders.component';
import { SellerLayoutComponent } from './layouts/sellerLayout/sellerLayout.component';
import { UserMangementComponent } from './admin/user-mangement/user-mangement.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { SettingsComponent } from './customer/settings/settings.component';
import { ChatsComponent } from './customer/chats/chats.component';
import { AdminLayoutSidebarComponent } from './layouts/adminLayout/admin-layout-sidebar/admin-layout-sidebar.component';
import { SellerInfoComponent } from './seller/seller-info/seller-info.component';
import { AddressComponent } from './customer/address/address.component';
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
// import { CategoriesComponent } from './outer/categories/categories.component';
import { ProductsComponent } from './admin/products/products.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { FootballComponent } from './admin/football/football.component';
import { SellerComponent } from './admin/seller/seller.component';
import { OrdersComponent } from './admin/orders/orders.component';


// Define routes
const routes: Routes = [
  {
    path: '', // Main route for outer layout
    component: OuterLayoutComponent, // Use Outer Layout
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contactus', component: ContactusComponent },
      { path: 'signIn', component: SignInComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'admin-login', component: AdminLoginComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default to Home
    ],
  },

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

  // ***************************************SellerLayout*********************************
  {
    path: 'seller',
    component: SellerLayoutComponent,
    children: [
      { path: 'seller-info', component: SellerInfoComponent },
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
