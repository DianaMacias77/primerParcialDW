import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard} from '@auth0/auth0-angular';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: 'app-index', component: IndexComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
