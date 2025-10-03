import { Component, inject, signal, input, model } from '@angular/core';

import { ApiService } from '../service';
import { Pagination } from "./pagination/pagination";
import { Card } from "./card/card";

import { ICard, IPageResponse } from "../interfaces"


type bb = {result: ICard[];};

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
    this.service.getNextPage().subscribe((d: {results: ICard[]}) => {
      this.cards.set(d.results)
    });
  }

  getPrevPage() {
    this.service.getPrevPage().subscribe((d: {results: ICard[]}) => {
      this.cards.set(d.results)
    });
  }

  getPokemon() {
    this.service.getPokemot(11).subscribe((d: any) => {
      console.log(d)
    });
  }
}

let cl = console.log;

