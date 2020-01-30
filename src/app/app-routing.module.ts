import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatEditorComponent } from './cat-editor/cat-editor.component';

const routes: Routes = [
  { path: 'cats', component: CatListComponent },
  { path: 'cats/:mode/:id', component:  CatEditorComponent },
  { path: 'cats/:mode', component:  CatEditorComponent },
  { path: '**', redirectTo: 'cats' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
