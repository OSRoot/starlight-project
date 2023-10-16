import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Home } from '../_interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(public http: HttpClient) { }
  
  home(): Observable<Home> {
    return this.http.get<Home>(`${env.apiUrl}/content/home`);
  }
}
