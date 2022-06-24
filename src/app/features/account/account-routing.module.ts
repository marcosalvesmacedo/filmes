import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { AccountComponent } from './access/forms/account/account.component';
import { LoginComponent } from './access/forms/login/login.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'acesso',
        pathMatch: 'full'
    },
    {
        path: 'acesso',
        component: AccessComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'criar-conta',
                component: AccountComponent,
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

