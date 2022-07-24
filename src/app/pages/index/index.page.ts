import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ListComponent } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  listComponents: Observable<ListComponent[]>;

  albums: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(data => {
      this.albums = data;
      console.log(this.albums);
      }
    );
  }

  onSearchChange(event: any) {
    console.log(event);
  }

}
