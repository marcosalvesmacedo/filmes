import { Injectable } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { CatalogModule } from "./catalog.module";

@Injectable({
    providedIn: CatalogModule
})
export class CatalogFacade {

    constructor(
        private moviesService: MoviesService
    ) {
        
    }

    public listMoviesLoad(): void {
        this.moviesService
            .getAll()
            .subscribe(
                (res) => {
                    console.log(res)
        });
    }
}