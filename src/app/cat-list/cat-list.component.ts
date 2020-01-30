import { Component, OnInit } from '@angular/core';
import { CatRepository } from './../model/cat.repository';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.styl']
})
export class CatListComponent implements OnInit {

constructor(private catRepository: CatRepository) {}

  ngOnInit() {
  }

  get cats() {
    return this.catRepository.cats;
  }

  like(id: number) {
    const cat = this.catRepository.getCat(id);
    if (cat) {
      cat.incr();
    }
  }
  add() {

  }
  dislike(id: number) {
    const cat = this.catRepository.getCat(id);
    if (cat) {
      cat.decr();
    }
  }

}
