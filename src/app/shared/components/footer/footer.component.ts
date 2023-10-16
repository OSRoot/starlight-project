import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/_interfaces/aboutus';
import { ContactusService } from 'src/app/_services/contactus.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  info:Info ={address:'',phone:'',email:''};
  constructor(private contactservice:ContactusService){}

  ngOnInit() {
    this.contactservice.info().subscribe(
      res=>{
        this.info=res
      }
    ) 
}
}