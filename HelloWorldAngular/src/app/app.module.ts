import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component'; 
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserListComponent,
    UserDetailsComponent,
    LoginComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
