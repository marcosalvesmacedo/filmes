import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CatalogModule } from "../catalog/catalog.module";
import { MoviesModel } from "../models/movies.model";

@Injectable({
    providedIn: CatalogModule
})
export class MoviesStore {
    private _movies = new BehaviorSubject<Array<MoviesModel>>([]);
    constructor() {}

    public set(movies: MoviesModel[]) {
        this._movies.next(movies);
    }

    public get(): MoviesModel[] {
        return this._movies.getValue();
    }

    public getObservable(): Observable<Array<MoviesModel>> {
        return this._movies.asObservable();
    }
}