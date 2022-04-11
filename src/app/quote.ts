export class Quote {
  showDetails: boolean;
  upvotes: any;
  downvotes: any;
  constructor(
    public id: number,
    public excerpt: string,
    public author: string,
    public submitter: string,
    public createdDate: Date
  ) {
    this.showDetails = false;
  }
}
