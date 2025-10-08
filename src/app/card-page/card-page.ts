import { Component, inject, input, signal } from '@angular/core';
import { ApiService } from '../service';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryModule, GalleryItem, ImageItem, GalleryComponent } from 'ng-gallery';

import { IPokemon } from '../interfaces';

@Component({
  selector: 'app-card-page',
  imports: [GalleryComponent],
  templateUrl: './card-page.html',
  styleUrl: './card-page.scss'
})
export class CardPage {
  private service = inject(ApiService);
  private pokemonId = signal(0);
  pokemonData: Partial<IPokemon>;
  images: GalleryItem[];

  private setPokemon(id: number){
    this.service.getPokemot(id).subscribe((d: IPokemon) => {
      this.pokemonData = d;
      this.pokemonId.set(id);
      
      this.images = [
        new ImageItem({ src: d.sprites.other.home.front_default }),
        new ImageItem({ src: d.sprites.other.home.front_female }),
        new ImageItem({ src: d.sprites.other.home.front_shiny }),
        new ImageItem({ src: d.sprites.other.home.front_shiny_female }),
        new ImageItem({ src: d.sprites.other['official-artwork'].front_default }),
        new ImageItem({ src: d.sprites.other['official-artwork'].front_shiny }),
      ];
    });
  }

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId.set(params['id']);
    });
    this.pokemonData = {}
    this.images = [];
  } 
  ngOnInit() {
    this.setPokemon(this.pokemonId());
  }
  
  goCatalog() {
    this.router.navigate(['']);
  }
  prevCardClicked() {
    this.router.navigate(['card', this.pokemonId() - 1]);
    this.setPokemon(this.pokemonId() - 1);
  }
  nextNextClicked() {
    this.router.navigate(['card', +this.pokemonId() + 1]);
    this.setPokemon(+this.pokemonId() + 1);
  }
}
