import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogCardComponent } from './shared/components/blog-card/blog-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    BlogComponent,
    ProductCardComponent,
    FilterComponent,
    BlogDetailsComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SlickCarouselModule,
    MatMenuModule,
    MatIconModule,
    FormsModule, // Add FormsModule here,
    MatOptionModule, // Add this line
    MatSelectModule, // Add this line
    MatRadioModule,
    ReactiveFormsModule, // Add this line
    HttpClientModule,
    ToastrModule.forRoot() // Add this line

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
