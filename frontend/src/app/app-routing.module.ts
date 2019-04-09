import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {States} from './constants/states.constant';

const routes: Routes = [
  {
    path: States.USER,
    loadChildren: './sections/user/user.module#UserModule'
  },
  { path: '',
    // 1 - Because we have only one page
    redirectTo: States.USER_EDIT(1),
    pathMatch: 'full'
  },
  {
    path: '**',
    // 1 - Because we have only one page
    redirectTo: States.USER_EDIT(1)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
