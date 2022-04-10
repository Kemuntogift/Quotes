import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {
      id: 1,
      excerpt:
        'Whoever said money cannot buy happiness simply did not know where to shop',
      author: 'Bo Derek',
      submitter: 'Gift Kemunto',
    },
    {
      id: 2,
      excerpt:
        'If you were born with the weakness to fall you were born with the strength to rise.',
      author: 'Rupi Kaur',
      submitter: 'Jane Doe',
    },
    {
      id: 3,
      excerpt:
        'Do not forget to drink water and get sun. You are  basically a houseplant with complicated emotions.',
      author: 'Anonymous',
      submitter: 'John Doe',
    },
    {
      id: 4,
      excerpt:
        'The best ideas come as jokes so make your thinking as funny as possible',
      author: 'David Oglivy',
      submitter: 'Miss Jagger',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
