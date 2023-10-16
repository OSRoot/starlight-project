import { Component, OnInit } from '@angular/core';
import { Event } from '../../_interfaces/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit{
  blogDetails!:Event
  constructor(
    private actRoute: ActivatedRoute
  ) { }
  ngOnInit() {

    this.actRoute.data.subscribe(data => {
       this.blogDetails=data['routeResolver']
    })
  }
}
