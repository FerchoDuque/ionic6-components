import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { ListComponent } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  listComponents: Observable<ListComponent[]>;

  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.listComponents = this.dataService.getMenuOpts();
  }

  mostrarMenu() {
    this.menuController.open();
  }
}
