import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Whoever said money cannot buy happiness simply did not know where to shop',
      'Bo Derek',
      'Gift Kemunto',
      new Date(2019, 3, 14)
    ),
    new Quote(
      2,
      'If you were born with the weakness to fall you were born with the strength to rise.',
      'Rupi Kaur',
      'Jane Doe',
      new Date(2022, 3, 21)
    ),
    new Quote(
      3,
      'Do not forget to drink water and get sun. You are  basically a houseplant with complicated emotions.',
      'Anonymous',
      'John Doe',
      new Date(2016, 1, 16)
    ),
    new Quote(
      4,
      'The best ideas come as jokes so make your thinking as funny as possible',
      'David Oglivy',
      'Miss Jagger',
      new Date(2022, 4, 11)
    ),
  ];
  lastcount: any;
  currentcount: any;

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isExpired: any, index: number) {
    if (isExpired) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  quotevotes: number = 0;
  AddUpvote() {
    this.quotevotes++;
  }
  downvotes: number = 0;
  AddDownvote() {
    this.downvotes++;
  }
  highestUpvote() {
    for (let counter: number = 0; counter < this.quotes.length; counter++) {
      this.lastcount = this.quotes[counter].upvotes;

      if (this.lastcount > this.currentcount) {
        this.currentcount = this.lastcount;
      }
    }
    return this.currentcount;
  }
  constructor() {}

  ngOnInit(): void {}
}
