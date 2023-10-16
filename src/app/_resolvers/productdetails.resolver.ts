import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Product } from '../_interfaces/product';
import { ProductsService } from '../_services/products.service';
import { inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';


export const productdetailsResolver: ResolveFn<Product> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productService: ProductsService = inject(ProductsService)
): Observable<Product> => {  
  return productService.productDetails(route.params['id']).pipe(
    catchError((err) => {
      throw err; 
    })
  );};
