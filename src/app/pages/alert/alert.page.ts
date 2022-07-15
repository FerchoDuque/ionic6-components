import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Alert2 canceled'; }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.handlerMessage = 'Alert2 confirmed'; }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            console.log('ok clicked!', data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked!');
          }
        },
      ],
      backdropDismiss: false,
      inputs: [
        {
          placeholder: 'Name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself'
        }
      ]
    });

    await alert.present();
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Select your favorite color',
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('ok clicked!');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel clicked!');
          }
        },
      ],
      inputs: [
        {
          label: 'Red',
          type: 'radio',
          value: 'red'
        },
        {
          label: 'Blue',
          type: 'radio',
          value: 'blue'
        },
        {
          label: 'Green',
          type: 'radio',
          value: 'green'
        }
      ]
    });

    await alert.present();
  }
}
