import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
=======

>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
import { HomeComponent } from './outer/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './outer/about/about.component';
import { CategoriesComponent } from './outer/categories/categories.component';
import { DataService } from './services/data.service';
<<<<<<< HEAD
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
import { SellerLayoutComponent } from './layouts/sellerLayout/sellerLayout.component';
import { CustomerLayoutComponent } from './layouts/customerLayout/customerLayout.component';
import { AdminLayoutsComponent } from './layouts/adminLayout/adminLayout.component';
import { OuterLayoutComponent } from './layouts/outerLayout/outerLayout.component';
import { SignInComponent } from './outer/signIn/signIn.component';
import { SignupComponent } from './outer/signup/signup.component';
import { HeaderComponent } from './layouts/outerLayout/header/header.component';
import { FooterComponent } from './layouts/outerLayout/footer/footer.component';
import { ContactusComponent } from './outer/contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerHeaderComponent } from './layouts/customerLayout/customer-header/customer-header.component';
import { CustomerFooterComponent } from './layouts/customerLayout/customer-footer/customer-footer.component';
import { OrdersComponent } from './customer/orders/orders.component';
import { FavouritesComponent } from './customer/favourites/favourites.component';
import { SettingsComponent } from './customer/settings/settings.component';
import { CartComponent } from './customer/cart/cart.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { SidebarComponent } from './customer/sidebar/sidebar.component';
import { ChatsComponent } from './customer/chats/chats.component';
import { AdminLayoutHeaderComponent } from './layouts/adminLayout/admin-layout-header/admin-layout-header.component';
import { AdminLayoutFooterComponent } from './layouts/adminLayout/admin-layout-footer/admin-layout-footer.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHeaderComponent } from './layouts/sellerLayout/seller-header/seller-header.component';
import { SellerFooterComponent } from './layouts/sellerLayout/seller-footer/seller-footer.component';
import { SellerOrdersComponent } from './seller/seller-orders/seller-orders.component';
import { SellerFeedbacksComponent } from './seller/seller-feedbacks/seller-feedbacks.component';
import { UserMangementComponent } from './admin/user-mangement/user-mangement.component';
import { CustomerSidebarComponent } from './layouts/customerLayout/customer-sidebar/customer-sidebar.component';
import { AdminLayoutSidebarComponent } from './layouts/adminLayout/admin-layout-sidebar/admin-layout-sidebar.component';
import { SellerSidebarComponent } from './layouts/sellerLayout/seller-sidebar/seller-sidebar.component';
import { SellerInfoComponent } from './seller/seller-info/seller-info.component';
import { AddressComponent } from './customer/address/address.component';
<<<<<<< HEAD
=======
import { SellerProductsComponent } from './seller/seller-products/seller-products.component';
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
import { AdminLoginComponent } from './outer/admin-login/admin-login.component';
import { BallsComponent } from './admin/balls/balls.component';
import { CricketGearComponent } from './admin/cricket-gear/cricket-gear.component';
import { FootwearComponent } from './admin/footwear/footwear.component';
<<<<<<< HEAD
import { ProductsComponent } from './admin/products/products.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { FootballComponent } from './admin/football/football.component';
import { CricketComponent } from './admin/cricket/cricket.component';
import { BasketballComponent } from './admin/basketball/basketball.component';

import { provideToastr } from 'ngx-toastr';
import { authInterceptor } from './interceptor/auth.interceptor';
=======
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SignInComponent,
    CategoriesComponent,
    ContactusComponent,
    AdminLayoutsComponent,
    CustomerLayoutComponent,
    OuterLayoutComponent,
    SellerLayoutComponent,
    AdminComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    OrdersComponent,
    FavouritesComponent,
    SettingsComponent,
    CartComponent,
    ProfileComponent,
    SidebarComponent,
    ChatsComponent,
    AdminLayoutHeaderComponent,
    AdminLayoutFooterComponent,
    SellerComponent,
    SellerHeaderComponent,
    SellerFooterComponent,
    SellerOrdersComponent,
    SellerFeedbacksComponent,
    UserMangementComponent,
    CustomerLayoutComponent,
    SellerLayoutComponent,
    SellerSidebarComponent,
    AdminLayoutsComponent,
    CustomerSidebarComponent,
     AdminLayoutSidebarComponent,
    SellerInfoComponent,
    AddressComponent,
<<<<<<< HEAD
=======
    SellerProductsComponent,
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
    AdminLoginComponent, 
    BallsComponent,
    CricketGearComponent,
    FootwearComponent,
<<<<<<< HEAD
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    DashboardComponent,
    AdminCategoriesComponent,
    FootballComponent,
    CricketComponent,
    BasketballComponent,
=======
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule, 
    FormsModule,
  ],
<<<<<<< HEAD
  providers: [DataService,  
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    },
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent],
  
=======
  providers: [DataService],
  bootstrap: [AppComponent],
>>>>>>> 920da0ecca121bfc4e5a34516401cb364f2987f0
})
export class AppModule {}
