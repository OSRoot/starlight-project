import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Aboutus } from '../_interfaces/aboutus';
import { AboutusService } from '../_services/aboutus.service';
import { inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';

export const aboutusResolver: ResolveFn<Aboutus> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  aboutService: AboutusService = inject(AboutusService)
): Observable<Aboutus> => {
  return aboutService.allInfo().pipe(
    catchError((err) => {
      throw err; 
    })
  );
};

