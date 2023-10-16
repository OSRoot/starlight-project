import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Home } from 'src/app/_interfaces/home';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home!: Home ;
  constructor(
    private actRoute: ActivatedRoute
  ) { }
  ngOnInit() {

    this.actRoute.data.subscribe(data => {
      console.log('Check route resolver data')
       this.home=data['routeResolver']
    })
  }

  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    // centerMode: true,
    // centerPadding: '30px',
    arrows: true,
    infinite: true,
    vertical: false, // Add this line to enable horizontal scrolling

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],};



}
