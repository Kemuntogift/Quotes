import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isExpired = new EventEmitter<boolean>();

  quoteExpired(expired: boolean) {
    this.isExpired.emit(expired);
  }

  quotevotes: number = 0;
  AddUpvote() {
    this.quotevotes++;
  }
  downvotes:number =0
  AddDownvote() {
    this.downvotes++;
  }
  constructor() {}

  ngOnInit(): void {}
}
