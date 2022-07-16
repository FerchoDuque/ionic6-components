import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  birthDate: Date = new Date();

  customPickerOptions = {
    mode: 'md',
    buttons: [
      {
        text: 'Hola'
      },
      {
        text: 'Mundo'
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  alterDate(event: any) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
