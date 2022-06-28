import { Injectable } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { MoviesStore } from "../stores/movies.store";
import { CatalogModule } from "./catalog.module";
import { MatTableDataSource } from '@angular/material/table';
import { MoviesModel } from "../models/movies.model";

@Injectable({
    providedIn: CatalogModule
})
export class CatalogFacade {
    
    public dataSource: any;

    constructor(
        private moviesService: MoviesService,
        private moviesStore: MoviesStore
    ) {}

    public listMoviesLoad(): void {
        this.moviesService
            .getAll()
            .subscribe((res) => {
                this.moviesStore.set(res);
                this.dataSource = new MatTableDataSource<MoviesModel>(res)
            });
    }
}