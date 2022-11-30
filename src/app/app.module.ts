import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

import { SLinComponent } from './slin/slin.component';
import { LoginComponent } from './slin/login/login.component';
import { SignupComponent } from './slin/signup/signup.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    SLinComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
