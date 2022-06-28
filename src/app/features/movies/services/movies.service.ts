import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesAdapter } from '../adapters/movies.adapter';
import { CatalogModule } from '../catalog/catalog.module';
import { MoviesModel } from '../models/movies.model';
import { map } from 'rxjs/operators';
import { MoviesResponseModel } from '../models/movies-response.model';

@Injectable({
  providedIn: CatalogModule
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient,
    private moviesAdapter: MoviesAdapter
  ) { }

  public getAll() {
    return this.httpClient
      .get('/api/v1/movies/getAll')
      .pipe(
        map((resp: any) => { 
          return this.moviesAdapter.adapt(resp);
        })
      );
  }
}
