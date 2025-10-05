import { Component, computed, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  name = input.required<string>();
  url = input.required<string>();

  id = computed( () => {
    const arr = this.url().split('/');
    arr.pop();
    return arr.pop(); // da kringe
  });
  
}
