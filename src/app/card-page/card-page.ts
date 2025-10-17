import { Component, inject, input, signal } from '@angular/core';
import { ApiService } from '../service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GalleryModule, GalleryItem, ImageItem, GalleryComponent } from 'ng-gallery';

import { IPokemon } from '../interfaces';

@Component({
  selector: 'app-card-page',
  imports: [GalleryComponent, RouterLink],
  templateUrl: './card-page.html',
  styleUrl: './card-page.scss'
})
export class CardPage {
  private service = inject(ApiService);
  pokemonId = signal<number>(1);
  pokemonData: Partial<IPokemon>;
  images: GalleryItem[];

  private setPokemon(id: number){
    this.service.getPokemon(id).subscribe((d: IPokemon) => {
      this.pokemonData = d;
      this.pokemonId.set(id);
      
      let buf: typeof this.images = []; // idk, gallery not work if push directly in this.images. and i use it
      const filterAvaileblePathToBuf = (obj: any) => {
        Object.keys(obj).forEach(key => {
          const src: string = obj[key];
          src && buf.push(new ImageItem({ src: src }));
        })
      }
      filterAvaileblePathToBuf(d.sprites.other.home);
      filterAvaileblePathToBuf(d.sprites.other['official-artwork']);

      this.images = buf;
      // and need update gallery kak-to
    });
  }

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.pokemonData = {}
    this.images = [];
  } 
  ngOnInit() {
    this.setPokemon(this.pokemonId());
    this.activatedRoute.params.subscribe(params => 
      this.setPokemon(params['id'])
    );
  }
}
