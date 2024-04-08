import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsComponent } from './sms/sms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 


const routes: Routes = [
     {
        path:'sms',
        component:SmsComponent
     },
     {
      path:'dashboard',
      component:DashboardComponent
   },
     

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
