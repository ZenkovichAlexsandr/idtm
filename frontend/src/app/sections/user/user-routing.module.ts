import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {NgModule} from '@angular/core';
import {UserResolver} from './user.resolver';

const userRoutes: Routes = [
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
