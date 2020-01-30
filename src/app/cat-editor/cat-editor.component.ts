import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CatRepository } from './../model/cat.repository';
import { Cat } from './../model/cat.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cat-editor',
  templateUrl: './cat-editor.component.html',
  styleUrls: ['./cat-editor.component.styl']
})
export class CatEditorComponent implements OnInit {
  public editing = false;
  public cat: Cat = new Cat();
  public editor = false;
  public submitted = false;

  @ViewChild('cat_description', {static: false})
  catDescription: ElementRef;
  @ViewChild('cat_name', {static: false})
  catName: ElementRef;

  constructor(private catRepository: CatRepository,
              private router: Router,
              activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      this.cat = Object.assign(this.cat,
        catRepository.getCat(Number(activeRoute.snapshot.params.id)));
    } else {
      this.editor = true;
    }
  }

  ngOnInit() {
  }

  changeImage(img: string) {
    this.cat.img = img;
  }
  edit() {
    this.editor = true;
  }
  remove() {
    this.catRepository.removeCat(this.cat.id);
    this.router.navigateByUrl('/cats');
  }

  save(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      if (this.editing) {
        this.catRepository.updateCat(this.cat);
      } else {
        this.catRepository.addCat(this.cat);
      }
      this.editor = false;
      this.submitted = false;
    }
  }


}
