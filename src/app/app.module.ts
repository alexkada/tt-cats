import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatEditorComponent } from './cat-editor/cat-editor.component';
import { AvatarComponent } from './avatar/avatar.component';
import { CatItemComponent } from './cat-item/cat-item.component';

@NgModule({
  declarations: [AppComponent, CatListComponent, CatEditorComponent, AvatarComponent, CatItemComponent],
  imports: [ModelModule, NgbModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
