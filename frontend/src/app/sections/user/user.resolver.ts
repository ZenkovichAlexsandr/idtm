import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';
import {UserService} from '../../services/user.service';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const idKey = 'id';
    return this.userService.findOne(route.params[idKey]);
  }
}
