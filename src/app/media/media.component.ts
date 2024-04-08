import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
 
  showSchedule: boolean = false;
  selectedDate!: string;
  selectedTime!: string;

  openDatePicker() {
    // Implement logic to open date picker
  }

  openTimePicker() {
    // Implement logic to open time picker
  }
   

   


}
