import { Injectable } from '@angular/core';
import { CatalogModule } from '../catalog/catalog.module';
import { MoviesResponseModel } from '../models/movies-response.model';
import { MoviesModel } from '../models/movies.model';

@Injectable({
  providedIn: CatalogModule
})
export class MoviesAdapter {

  constructor() { }

  public adapt(response: MoviesResponseModel): MoviesModel[] {
     return response.filmes.map((item) => {
        return <MoviesModel> {
          code: item.codigo,
          title: item.titulo, 
          description: item.descricao,
          releaseYear: item.anoLancamento,
          rentDays: item.diasDeAluguel,
          rentValue: item.valorAluguel
        }
      });
  } 
    
}
