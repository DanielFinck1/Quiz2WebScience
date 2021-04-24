import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DCComponent } from './dc/dc.component';
import { MarvelComponent } from './marvel/marvel.component';

const routes: Routes = [
  { path: 'DC', component: DCComponent },
  { path: 'Marvel', component: MarvelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
