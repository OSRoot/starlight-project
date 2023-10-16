import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { homeResolver } from './_resolvers/home.resolver';
import { blogdetailsResolver } from './_resolvers/blogdetails.resolver';
import { blogResolver } from './_resolvers/blog.resolver';
import { aboutusResolver } from './_resolvers/aboutus.resolver';
import { productdetailsResolver } from './_resolvers/productdetails.resolver';
import { productsResolver } from './_resolvers/products.resolver';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    resolve: {
      routeResolver: homeResolver
    },
  },
  {
    path:'about-us',
    component:AboutUsComponent,
    resolve:{
      routeResolver: aboutusResolver
    }
  },
  {
    path:'products',
    component:ProductsComponent,
    resolve:{
      routeResolver: productsResolver
    }
  },
  {
    path:'product-details/:id',
    component:ProductDetailsComponent,
    resolve:{
      routeResolver: productdetailsResolver
    }
  },

  {
    path:'events',
    component:BlogComponent,
    resolve:{
      routeResolver: blogResolver
    }
  },
  // {
  //   path:'blog',
  //   component:BlogComponent
  // },
  {
    path:'event-details/:id',
    component:BlogDetailsComponent,
    resolve: {
      routeResolver: blogdetailsResolver
    },
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
