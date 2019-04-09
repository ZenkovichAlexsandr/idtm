import {environment} from '../../environments/environment';

class User {
  static readonly byId = (id: number) => `${environment.serviceUrl}/user/${id}`;
}

export class Endpoints {
  static readonly USER = User;
}
