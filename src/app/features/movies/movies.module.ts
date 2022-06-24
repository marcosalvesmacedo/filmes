import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogModule } from './catalog/catalog.module';
import { ListMoviesComponent } from './catalog/pages/list-movies/list-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    CatalogComponent,
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CatalogModule
  ]
})
export class MoviesModule { }
