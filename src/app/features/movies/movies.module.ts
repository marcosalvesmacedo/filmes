import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogModule } from './catalog/catalog.module';
import { FormMoviesComponent } from './catalog/forms/form-movies/form-movies.component';
import { ListMoviesComponent } from './catalog/pages/list-movies/list-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    CatalogComponent,
    ListMoviesComponent,
    FormMoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MoviesRoutingModule,
    CatalogModule
  ]
})
export class MoviesModule { }
