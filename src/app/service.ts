import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

import { ICard } from './interfaces';

let cl = console.log;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  private url = "https://pokeapi.co/api/v2/";
  private currentPage: number = -1;
  private pageLimit: number = 5;
  private getPage(num: number) {
    return this.http.get<{results: ICard[]}>(this.url + 'ability/',
       { params: { offset: this.currentPage * this.pageLimit, limit: this.pageLimit} } )

  }
  getNextPage(){
    return this.getPage(++this.currentPage);
  }
  getPrevPage(){
    return this.getPage(--this.currentPage);
  }

  private openedCard?: number = 0;
  getPokemot(id: number) {
    this.openedCard = id;
    return this.http.get(this.url + 'pokemon/' + id);
  }
}


