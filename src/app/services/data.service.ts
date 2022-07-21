import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListComponent } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getConfig() {
    // eslint-disable-next-line max-len
    return this.http.get('https://storage.cloud.google.com/buckerionicapps/config.json');
  }

  getMenuOpts() {
    // eslint-disable-next-line max-len
    return this.http.get<ListComponent[]>('/assets/data/menu-opts.json');
  }
}
