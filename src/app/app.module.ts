import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'register',component:RegisterComponent},
      {path:'users',component:UserComponent},
      {path:'login',component:LoginComponent},
      {path:'',component:HomeComponent}
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
