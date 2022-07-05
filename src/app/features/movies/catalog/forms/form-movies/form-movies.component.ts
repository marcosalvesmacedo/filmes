import { Component, EventEmitter, Output } from '@angular/core';
import { MOVIES } from '../../../constants/common.constants';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.scss']
})
export class FormMoviesComponent {
  
  public labels = MOVIES;
  @Output() submitForm = new EventEmitter<any>();

  constructor() {}
  
  public onSubmit(form: any): void {
    this.submitForm.emit(form.value);
    form.resetForm();
  }
}
