import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DCComponent } from './dc/dc.component';
import { MarvelComponent } from './marvel/marvel.component';
import { AjaxComponent } from './ajax/ajax.component';

const routes: Routes = [
  { path: 'DC', component: DCComponent },
  { path: 'Marvel', component: MarvelComponent },
  { path: 'Ajax', component: AjaxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
