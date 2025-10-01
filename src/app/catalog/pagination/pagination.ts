import { Component, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  emitPrevClicked = output<void>();
  prevClicked() {
    this.emitPrevClicked.emit();
  }
  
  emitNextClicked = output<void>();
  nextClicked() {
    this.emitNextClicked.emit();
  }
}
