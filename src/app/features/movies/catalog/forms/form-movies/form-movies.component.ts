import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.scss']
})
export class FormMoviesComponent {
 
  constructor() {}
  
  public onSubmit(form: any): void {
    console.log(form.value);
  }
}
