import { Component, inject,
   signal, input, model } from '@angular/core';
import { ApiService } from '../service';
import { Pagination } from "./pagination/pagination";
import {ICard} from "../interfaces"
import { Card } from "./card/card";


@Component({
  selector: 'app-catalog',
  imports: [Pagination, Card],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog {
  cards = signal<ICard[]>([]);
  private service = inject(ApiService);

  constructor() {
    this.getNextPage();
  }
  
  getNextPage() {
    this.service.getNextPage().subscribe((d: any) => {
      this.cards.set(d?.results)
    });
  }

  getPrevPage() {
    this.service.getPrevPage().subscribe((d: any) => {
      this.cards.set(d?.results)
    });
  }

  getPokemot() {
    this.service.getPokemot(11).subscribe((d: any) => {
      console.log(d)
    });
  }
}
