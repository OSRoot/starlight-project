import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { HomeService } from '../_services/home.service';
import { inject } from '@angular/core';
import { Observable ,catchError} from 'rxjs';
import { Home } from '../_interfaces/home';

export const homeResolver: ResolveFn<Home> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  homeService: HomeService = inject(HomeService)
): Observable<Home> => {
    return homeService.home().pipe(
      catchError((err) => {
        throw err; 
      })
    );
};
