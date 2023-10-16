import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../_interfaces/blog';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient) { }
  
  allEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${env.apiUrl}/events`);
  }

  eventDetails(id:string):Observable<Event>{
    return this.http.get<Event>(`${env.apiUrl}/events/show/${id}`);
  }
}
