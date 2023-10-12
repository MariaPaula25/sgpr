import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InputsListComponent } from './inputs-list.component';

describe('InputsListComponent', () => {
  
  let component: InputsListComponent;
  let fixture: ComponentFixture<InputsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputsListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(InputsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
