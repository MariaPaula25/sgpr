import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InputsFormComponent } from './inputs-form.component';

describe('InputsFormComponent', () => {
  
  let component: InputsFormComponent;
  let fixture: ComponentFixture<InputsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputsFormComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(InputsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
