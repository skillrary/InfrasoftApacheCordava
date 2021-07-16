import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    canActivate: [AuthGuardService]
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  }, {
    path: '',
    component: LoginComponent
  }, {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }, {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'a',
    loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule)
  },
  {
    path: 'b',
    loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
