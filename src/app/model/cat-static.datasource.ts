import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { Observable, from } from 'rxjs';
import seedCats from '../../assets/seeds/cats.json';

@Injectable()
export class CatStaticDataSource {
  private cats: Cat[] = [];

  constructor() {
    seedCats.forEach(cat => this.cats.push(new Cat(cat.like, cat._id, cat.name, cat.img, cat.description)));
  }
  getCats(): Observable <Cat[]> {
    return from([this.cats]);
  }
}
