import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/outer-layout/header/header.component';
import { FooterComponent } from './layouts/outer-layout/footer/footer.component';
import { HomeComponent } from './outer/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
   HeaderComponent,
   FooterComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
