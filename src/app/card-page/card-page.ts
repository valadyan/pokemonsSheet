import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { ApiService } from '../service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GalleryModule, GalleryItem, ImageItem, GalleryComponent } from 'ng-gallery';

import { IPokemon } from '../interfaces';
import { concatMap, map, Observable, Observer, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-card-page',
  imports: [GalleryComponent, RouterLink, AsyncPipe],
  templateUrl: './card-page.html',
  styleUrl: './card-page.scss'
})
export class CardPage{
  private service = inject(ApiService);
  pokemonId = signal<number>(1);

  private filterAvaileblePathToBuf = (obj: any) => {
    const buf: GalleryItem[] = [];
    Object.keys(obj).forEach(key => {
      const src: string = obj[key];
      src && buf.push(new ImageItem({ src: src }));
    })
    return buf;
  };

  private activatedRoute = inject(ActivatedRoute);
  
  pokemonData$: Observable<IPokemon> = this.activatedRoute.paramMap.pipe(
    switchMap((params) => {
      const id = +params.get('id')!;
      this.pokemonId.set(id);
      
      return this.service.getPokemon(id);
    })
  );

  images$ = this.pokemonData$.pipe(map(d=>{
    const buf = this.filterAvaileblePathToBuf(d.sprites.other.home).concat(
      this.filterAvaileblePathToBuf(d.sprites.other['official-artwork']));
    return buf;
  }))
}
   