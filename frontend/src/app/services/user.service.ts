import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Endpoints} from '../constants/endpoints.constant';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  findOne(id: number): Observable<User> {
    return this.http.get<User>(Endpoints.USER.byId(id));
  }

  update(id: number, formData: FormData): Observable<User> {
    return this.http.put<User>(Endpoints.USER.byId(id), formData);
  }

}
