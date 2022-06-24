import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";

const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'conta',
                loadChildren: () => import('../features/account/account.module').then(m => m.AccountModule)
            },
            {
                path: 'home',
                loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'filmes',
                loadChildren: () => import('../features/movies/movies.module').then(m => m.MoviesModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class shellRoutingModule {}
