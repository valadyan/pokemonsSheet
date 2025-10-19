import { Component, computed, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ICard } from "../../interfaces"

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  info = input.required<ICard>();

  id = computed( () => {
    const arr = this.info().url.split('/');
    arr.pop();
    return arr.pop(); // da kringe
  });
  
}
