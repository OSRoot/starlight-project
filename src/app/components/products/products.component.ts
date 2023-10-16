import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllProducts } from 'src/app/_interfaces/product';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts!: AllProducts ;
  newCategory = {
    "id": '',
    "name": "All",
    "created_at": "2023-08-30T00:00:00.000000Z",
    "updated_at": "2023-08-30T00:00:00.000000Z",
    "image_url": "http://example.com/images/new-category.jpg"
  };
  
    selectedValue :any = '';

  searchTerm: string = '';
  constructor(
    private actRoute: ActivatedRoute, private productService:ProductsService
  ) { }
  ngOnInit() {

      this.actRoute.queryParamMap.subscribe(params => {
          this.selectedValue=+params.get('id')! || ''
          
      });
    this.actRoute.data.subscribe(data => {
       this.allProducts=data['routeResolver']
       this.allProducts.categories.unshift(this.newCategory)

    })


    

  }



  onSelectionChange() {
    this.productService.allProducts(this.searchTerm,this.selectedValue).subscribe(
      (res)=>{
        this.allProducts.products= res.products
      }
    )

  }
  onSearchSubmit() {
    this.productService.allProducts(this.searchTerm,this.selectedValue).subscribe(
      (res)=>{
        this.allProducts.products= res.products        
      }
    )
  }
}

