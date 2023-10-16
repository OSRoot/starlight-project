import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/_interfaces/product';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  myForm!: FormGroup;
  prodDetails!:Product
  constructor(private fb: FormBuilder ,   private actRoute: ActivatedRoute ,private toastr: ToastrService,
     private productservice:ProductsService
    ) {}

    
  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      this.prodDetails=data['routeResolver']
      console.log(data['routeResolver']);
      
   })

    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      product_id: [this.prodDetails.id, Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.productservice.order(this.myForm.value).subscribe(
        res=>{
          this.toastr.success(res.message, 'Success');
        },
        err=>{
          this.toastr.error(err.error.message, 'Error');

        }
      )

    }else{
       this.toastr.error('All feild is required to send the message', 'Error');
    }
  }
}
