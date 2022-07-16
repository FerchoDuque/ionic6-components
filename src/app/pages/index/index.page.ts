import { Component, OnInit } from '@angular/core';


interface ListComponent {
  icon: string;
  name:  string;
  redirectTo: string;
  color: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  listComponents: ListComponent[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
      color: 'primary'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
      color: 'warning'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
      color: 'tertiary'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons',
      color: 'secondary'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/cards',
      color: 'secondary'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check',
      color: 'primary'
    },
    {
      icon: 'hourglass-outline',
      name: 'Date time',
      redirectTo: '/datetime',
      color: 'primary'
    },
    {
      icon: 'bookmark-outline',
      name: 'Fab',
      redirectTo: '/fab',
      color: 'secondary'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
      color: 'tertiary'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirectTo: '/infinite',
      color: 'tertiary'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
