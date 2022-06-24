import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatalogModule } from '../catalog/catalog.module';
import { MoviesModule } from '../movies.module';

@Injectable({
  providedIn: CatalogModule
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll() {
    return this.httpClient.get('/api/v1/movies/getAll') 
  }
}
