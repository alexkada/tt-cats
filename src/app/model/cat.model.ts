
export  class Cat {
  constructor(
    public like: number = 0,
    // tslint:disable-next-line:variable-name
    public _id?: string,
    public name?: string,
    public img?: string,
    public description?: string,
  ) {}

  get id() {
    return Number(this._id);
  }
  set id(id) {
    this._id = String(id);
  }
  incr() {
    return ++this.like;
  }
  decr() {
    return --this.like;
  }
}
