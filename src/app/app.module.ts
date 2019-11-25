import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccordionModule} from 'ngx-bootstrap/accordion';
import { ModelpopupComponent } from './modelpopup/modelpopup.component';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ModelpopupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {
      path : '', component: HomeComponent
    },
    {
      path : 'register', component: RegisterComponent
    },
    {
      path : 'login', component: LoginComponent
    },
    {
      path : 'modalpopup', component: ModelpopupComponent
    }
    ]),
    AccordionModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
