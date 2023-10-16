import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProducts, Product } from '../_interfaces/product';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }
  
  allProducts(search:string,category_id:string): Observable<AllProducts> {
    return this.http.get<AllProducts>(`${env.apiUrl}/products?title=${search}&category_id=${category_id}`);
  }

  productDetails(id:string): Observable<Product> {
    return this.http.get<Product>(`${env.apiUrl}/products/show/${id}`);
  }

  order(body: {name:string, email:string,phone:string, product_id:string,message:string}): Observable<{message:string}> { 
    return this.http.post<{message:string}>(`${env.apiUrl}/order/store`,body)
  }
  
}
