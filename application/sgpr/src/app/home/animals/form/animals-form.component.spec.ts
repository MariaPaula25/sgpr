import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AnimalsFormComponent } from './animals-form.component';

describe('AnimalsFormComponent', () => {
  
  let component: AnimalsFormComponent;
  let fixture: ComponentFixture<AnimalsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnimalsFormComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(AnimalsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
