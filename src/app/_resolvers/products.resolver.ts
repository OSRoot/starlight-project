import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { AllProducts } from '../_interfaces/product';
import { ProductsService } from '../_services/products.service';
import { inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';


export const productsResolver: ResolveFn<AllProducts> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  productService: ProductsService = inject(ProductsService)
): Observable<AllProducts> => {
  const queryParams = route.queryParams['id'] || '';

  // Access specific query parameter
    return productService.allProducts('',queryParams).pipe(
      catchError((err) => {
        throw err; 
      })
    );
};
