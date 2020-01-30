import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { CatStaticDataSource } from './cat-static.datasource';

@Injectable()
export class CatRepository {
  public cats: Cat[];

  constructor(private catsData: CatStaticDataSource) {
    catsData.getCats().subscribe(data => this.cats = data);
  }
  getCat(id: number): Cat {
    return this.cats.find(cat => id === cat.id);
  }
  removeCat(id: number) {
    this.cats.splice(this.cats.findIndex(cat => cat.id === id), 1);
  }
  updateCat(cat: Cat) {
    this.cats.splice(this.cats.findIndex(p => p.id === cat.id), 1, cat);
  }
  addCat(cat: Cat) {
    if (this.cats.length > 0) {
      cat.id = this.cats[this.cats.length - 1].id + 1;
    } else {
      cat.id = 1;
    }
    this.cats.push(cat);
  }
}
