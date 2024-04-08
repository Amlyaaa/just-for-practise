import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient ) {}
  smsapi(data:any){
    debugger
    return this.http.get("http://api.sms123.in/api/QuickSend/QuickSend?username="+data.username+"&password="+
    data.password+"&mob="+data.mob+"&msg="+data.msg+"&sender="+data.sender+"&templateid="+data.templateid+
    "&coding="+data.coding,data);
    }
}
