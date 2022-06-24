import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent {
  
  constructor(
    private router: Router
  ) {
    this.router.navigate(['conta/acesso/login'])
  }

}
