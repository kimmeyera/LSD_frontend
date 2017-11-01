import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ItemService {

  private baseURL = 'http://94.130.57.246:9000/hackernews/';

  constructor(private http: HttpClient) { }
  
  getItems() {
    return this.http.get(this.baseURL + 'item/');
  }
}