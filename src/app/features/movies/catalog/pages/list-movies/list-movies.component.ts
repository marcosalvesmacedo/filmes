import { Component } from '@angular/core';
import { CatalogFacade } from '../../catalog.facade';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent {

  constructor(
    private catalogFacade: CatalogFacade
  ) {
    this.catalogFacade.listMoviesLoad();
  }
  
}
