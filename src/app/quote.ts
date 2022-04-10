export class Quote {
  showDetails: boolean;
  upvotes: any;
  downvotes: any;
  constructor(
    public id: number,
    public excerpt: string,
    public author: string,
    public submitter: string,
  ) {
    this.showDetails = false;
  }
}
