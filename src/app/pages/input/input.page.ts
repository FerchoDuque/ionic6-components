import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre = 'Fernando';
  usuario = {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log('onSubmit');
    console.log(formulario);
  }

}
