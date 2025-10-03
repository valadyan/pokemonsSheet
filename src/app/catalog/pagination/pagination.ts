import { Component, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  emitPrevPageClicked = output<void>();
  prevPageClicked() {
    this.emitPrevPageClicked.emit();
  }
  
  emitNextPageClicked = output<void>();
  nextPageClicked() {
    this.emitNextPageClicked.emit();
  }
}

let cl = console.log;