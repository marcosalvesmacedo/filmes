import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { shellRoutingModule } from './shell-routing.module';
import { AccountModule } from '../features/account/account.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from '../features/home/home.module';
import { MoviesModule } from '../features/movies/movies.module';


@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    shellRoutingModule,
    AccountModule,
    HomeModule,
    MoviesModule,
    MatToolbarModule
  ]
})
export class ShellModule { }
