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
  ];

  constructor() { }

  ngOnInit() {
  }

}
