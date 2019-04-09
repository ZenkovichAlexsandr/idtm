export class States {
  static readonly USER = 'user';
  static readonly USER_EDIT = (id: number) => `user/${id}`;
}
