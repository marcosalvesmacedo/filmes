import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ListMoviesComponent } from './catalog/pages/list-movies/list-movies.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'catalogo',
        pathMatch: 'full'
    },
    {
        path: 'catalogo',
        component: CatalogComponent,
        children: [
            {
                path: 'lista',
                component: ListMoviesComponent
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

