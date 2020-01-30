import { Component, OnInit, Input } from '@angular/core';
import {Cat } from './../model/cat.model';
import { CatRepository } from './../model/cat.repository';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.styl']
})
export class CatItemComponent implements OnInit {
  @Input() cat: Cat;

  constructor(private catRepository: CatRepository) { }

  ngOnInit() {}

  like(id: number) {
    const cat = this.catRepository.getCat(id);
    if (cat) {
      cat.incr();
    }
  }

  dislike(id: number) {
    const cat = this.catRepository.getCat(id);
    if (cat) {
      cat.decr();
    }
  }

}
