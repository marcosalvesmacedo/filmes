import { Injectable } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { MoviesStore } from "../stores/movies.store";
import { CatalogModule } from "./catalog.module";
import { MatTableDataSource } from '@angular/material/table';
import { MoviesModel } from "../models/movies.model";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: CatalogModule
})
export class CatalogFacade {
    
    public moviesList: any;

    constructor(
        private moviesService: MoviesService,
        private moviesStore: MoviesStore,
        private _snackBar: MatSnackBar
    ) {}

    public listMoviesLoad(): void {
        this.moviesService
            .getAll()
            .subscribe((res) => {
                this.moviesStore.set(res);
                this.moviesList = new MatTableDataSource<MoviesModel>(res)
            });
    }

    public onSubmitMoviesForm(event: MoviesModel): void {
        const code = this.moviesList.data.length + 1;
        event.code = code.toString();
        this.moviesList.data.push(event);
        this.moviesList._updateChangeSubscription();
        this._snackBar.open('Inserido com sucesso!', 'Fechar');

    }
}