import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aboutus } from 'src/app/_interfaces/aboutus';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  allInfo!:Aboutus
  constructor(
    private actRoute: ActivatedRoute
  ) { }
  ngOnInit() {

    this.actRoute.data.subscribe(data => {
       this.allInfo=data['routeResolver']
       
    })
  }
}
