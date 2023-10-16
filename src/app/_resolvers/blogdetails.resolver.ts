import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Event } from '../_interfaces/blog';
import { BlogService } from '../_services/blog.service';
import { inject } from '@angular/core';
import { Observable ,catchError} from 'rxjs';

export const blogdetailsResolver: ResolveFn<Event> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  blogService: BlogService = inject(BlogService)
): Observable<Event> => {  
  return blogService.eventDetails(route.params['id']).pipe(
    catchError((err) => {
      throw err; 
    })
  );};

