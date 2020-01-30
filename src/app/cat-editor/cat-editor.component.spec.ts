import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEditorComponent } from './cat-editor.component';

describe('CatEditorComponent', () => {
  let component: CatEditorComponent;
  let fixture: ComponentFixture<CatEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
