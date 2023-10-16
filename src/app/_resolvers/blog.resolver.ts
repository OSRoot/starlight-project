import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { BlogService } from '../_services/blog.service';
import { inject } from '@angular/core';
import { Event } from '../_interfaces/blog';

export const blogResolver: ResolveFn<Event[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  blogService: BlogService = inject(BlogService)
): Observable<Event[]> => {  
  return blogService.allEvents().pipe(
    catchError((err) => {
      throw err; 
    })
  );
};


