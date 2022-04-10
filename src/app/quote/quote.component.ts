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
      'Gift Kemunto'
    ),
    new Quote(
      2,
      'If you were born with the weakness to fall you were born with the strength to rise.',
      'Rupi Kaur',
      'Jane Doe'
    ),
    new Quote(
      3,
      'Do not forget to drink water and get sun. You are  basically a houseplant with complicated emotions.',
      'Anonymous',
      'John Doe'
    ),
    new Quote(
      4,
      'The best ideas come as jokes so make your thinking as funny as possible',
      'David Oglivy',
      'Miss Jagger'
    ),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isExpired: any, index: number) {
    if (isExpired) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
