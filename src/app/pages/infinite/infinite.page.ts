import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any = Array(20);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    console.log(this.data);
    if (this.data.length > 50) {
      console.log('stop');
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
    }
    setTimeout(() => {
      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      this.infiniteScroll.complete();
    }, 500);
  }

}
