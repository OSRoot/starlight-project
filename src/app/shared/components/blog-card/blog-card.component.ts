import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Home,Event } from 'src/app/_interfaces/home';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  @Input() data!: Event[];

  constructor(private router:Router){}

  navigate(id:any){
    this.router.navigateByUrl(`event-details/${id}`);
  }
}
