import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.styl']
})
export class AvatarComponent implements OnInit {

  @ViewChild('imageCat', {static: false})
  imageCat: ElementRef;
  @Input() img?: string;
  @Input() isChange = false;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeClickImage() {
    this.imageCat.nativeElement.click();
  }
  changeFileImage(e: any) {
    const file = e.srcElement.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.onChanged.emit(reader.result as string);
    };
  }
}
