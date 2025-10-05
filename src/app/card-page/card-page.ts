import { Component, inject, input, signal } from '@angular/core';
import { ApiService } from '../service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-page',
  imports: [],
  templateUrl: './card-page.html',
  styleUrl: './card-page.scss'
})
export class CardPage {
  private service = inject(ApiService);
  private pokemonId = signal(0);

  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId.set(params['id']);
    });
  } 

  ngOnInit() {
    this.service.getPokemot(this.pokemonId()).subscribe((d: any) => {
      console.log(d)
    });
  }
}
