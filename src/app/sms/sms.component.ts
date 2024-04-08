import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  textInput: string = '';
  letterCount: number = 0;
  textBoxValue: string = '';
  smsform!: FormGroup;

  constructor(private Service: ServiceService, private form: FormBuilder) { }

  ngOnInit() {
    this.smsform = this.form.group({
      username: ["demotr"],
      password: ["tr@1234"],
      sender: [""],
      templateid: [""],
      mob: [""],
      msg: [""],
      coding: ["1"]
    });
  }

  submit() {
    debugger;
    return this.Service.smsapi(this.smsform.value).subscribe((res: any) => {
      console.log(res);
      alert("SMS Sent Successfully!");
      console.log(this.smsform.value);
    });
  }

  onchange(event: Event): void {
    const templateId = (event.target as HTMLSelectElement).value;
    let message = '';
    switch (templateId) {
      case '1707161891201501738':
        message = 'Your My SMS verification Code id . Do not share this code with others Team Nuevas';
        break;
      case '1707161855199873979':
        message = 'Dear User your OTP is  Kindly use OTP to validate your Registration. Team Trackzia';//match this with value in dropdown
        break;
      case '1707161899992775140':
        message = 'Dear  , Your Complaint with Complaint Id:  has Been Resolve Kindly Share OTP, The OTP is  \n From Nuevas';
        break;
      default:
        message = 'Hey Lets Work Togather!';
        break;
    }
    this.smsform.patchValue({
      msg: message
    });
  }

  clearTextBox() {
    this.textInput = '';
    this.letterCount = 0;
  }

  getInvalidNumbersCount(): number {
    const textValue = this.smsform.get('mob')?.value;
  
    // Count total numbers of digits
    const totalDigitsCount = textValue.replace(/\D/g, '').length;
  
    // Calculate the count of incomplete 10-digit numbers
    let incompleteNumbersCount = Math.floor(totalDigitsCount / 10);
  
    // If the text ends with a digit and it's not a complete 10-digit number, count it as incomplete
    if (textValue.trim().length > 0 && !/\b\d{10}\b/.test(textValue.trim())) {
      incompleteNumbersCount++;
    }
  
    // If the last character entered is an Enter and it's preceded by a complete 10-digit number, subtract from incomplete count
    if (/\b\d{10}\b\s*$/.test(textValue)) {
      incompleteNumbersCount--;
    }
  
    // Ensure the count is non-negative
    incompleteNumbersCount = Math.max(0, incompleteNumbersCount);
  
    return incompleteNumbersCount;
  }
  

  count() {
     
    const textValue = this.smsform.get('mob')?.value;

    
    const mobileNumberRegex = /\b\d{10}\b/g;
  
  
    const matches = textValue.match(mobileNumberRegex);
  
  
    this.letterCount = matches ? matches.length : 0;
  }
 
  
  
}
