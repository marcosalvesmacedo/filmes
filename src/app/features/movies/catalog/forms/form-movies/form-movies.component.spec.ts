import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditMoviesComponent } from './create-edit-movies.component';

describe('CreateEditMoviesComponent', () => {
  let component: CreateEditMoviesComponent;
  let fixture: ComponentFixture<CreateEditMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditMoviesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
