import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Catalog } from "./catalog/catalog";

@Component({
  selector: 'app-root',
  imports: [Header, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pokemonsSheet');
}
