import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  salir() {
    this.modalCtr.dismiss();
  }

  salirGuardar() {
    this.modalCtr.dismiss({
      nombre: 'josele',
      pais: 'australia'
    });
  }

}
