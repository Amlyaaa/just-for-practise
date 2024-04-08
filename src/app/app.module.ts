import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
 
import { TestComponent } from './test/test.component';
import { SmsComponent } from './sms/sms.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import{FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MediaComponent } from './media/media.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CradComponent } from './crad/crad.component';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
       
         TestComponent,
         SmsComponent,
         SidebarComponent,
         HomeComponent,
         MediaComponent,
         LoginComponent,
         DashboardComponent,
         CradComponent,
         
        
       
       
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
