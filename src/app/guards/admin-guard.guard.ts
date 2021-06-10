import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const user = JSON.parse(localStorage.getItem('usuario'))
      if(user != null){
        if(user.type != 'ADMIN'){
          this.router.navigateByUrl('/profile');
          return false;
        }
      }
    return true;
  }
  
}
