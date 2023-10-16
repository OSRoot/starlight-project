import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  navbarItems = [
    { label: 'Home', active: false ,link:'/'},
    { label: 'About Us', active: false ,link:'/about-us'},
    { label: 'Products', active: false,link:'/products' },
    { label: 'Events', active: false ,link:'/events'},
    { label: 'Contact Us', active: false ,link:'/contact-us'}
  ];
  isMenuOpen = false;

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        this.navbarItems.forEach(item => {
          if(item.link === this.router.url){
            item.active= true
            this.navbarItems.forEach(item1 => {
              item1.active = item1 === item;
            });
          }
          if(this.router.url.startsWith('/products') ) {
            if(item.link.startsWith('/products') ){
              this.navbarItems.forEach(item1 => {
                item1.active = item1 === item;
              });
            }

            
        }
      }
        );
  }
})

}


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  setActive(activeItem: any) {    
    this.navbarItems.forEach(item => {
      item.active = item === activeItem;
    });
    this.isMenuOpen = !this.isMenuOpen;

  }
}
