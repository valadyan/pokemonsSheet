import { Component, inject, signal, input, model } from '@angular/core';

import { ApiService } from '../service';
import { Pagination } from "./pagination/pagination";
import { Card } from "./card/card";

import { ICard, IPageResponse, IPokemon } from "../interfaces"

@Component({
  selector: 'app-catalog',
  imports: [Pagination, Card],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog {
  cards = signal<ICard[]>([]);
  private service = inject(ApiService);
  
  ngOnInit() {
    this.service.getCurrPage().subscribe((d: {results: ICard[]}) => {
      this.cards.set(d.results)
    });
  }
  
  getNextPage() {
    this.service.getNextPage().subscribe((d: {results: ICard[]}) => {
      this.cards.set(d.results)
      cl(d)
    });
  }

  getPrevPage() {
    this.service.getPrevPage().subscribe((d: {results: ICard[]}) => {
      this.cards.set(d.results)
    });
  }
}

let cl = console.log;

