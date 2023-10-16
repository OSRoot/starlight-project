import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Info } from 'src/app/_interfaces/aboutus';
import { ContactusService } from 'src/app/_services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  myForm!: FormGroup;
  info:Info ={address:'',phone:'',email:''};
  constructor(private fb: FormBuilder, private contactService:ContactusService,private toastr: ToastrService,) {}

  ngOnInit() {
    this.contactService.info().subscribe(
      res=>{
        this.info=res
      }
    ) 

    this.myForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.contactService.contactUs(this.myForm.value).subscribe(
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
