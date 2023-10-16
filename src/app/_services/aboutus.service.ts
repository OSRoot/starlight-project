import { Injectable } from '@angular/core';
import { Aboutus } from '../_interfaces/aboutus';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  constructor(public http: HttpClient) { }
  
  allInfo(): Observable<Aboutus> {
    return this.http.get<Aboutus>(`${env.apiUrl}/content/aboutus`);
  }

}
