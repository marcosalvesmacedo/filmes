import { Component } from '@angular/core';
import { CatalogFacade } from '../../catalog.facade';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesModel } from '../../../models/movies.model';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent {
  public displayedColumns = ['code', 'title', 'description', 'releaseYear', 'rentDays', 'rentValue'];
  
  constructor(
    public catalogFacade: CatalogFacade
  ) {
    this.catalogFacade.listMoviesLoad();
  }
  
}
