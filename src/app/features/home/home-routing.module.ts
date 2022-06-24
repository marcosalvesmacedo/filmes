import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'bem-vindo',
        pathMatch: 'full'
    },
    {
        path: 'bem-vindo',
        component: WelcomeComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

