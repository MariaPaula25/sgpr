import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SalesFormComponent } from './sales-form.component';

describe('SalesFormComponent', () => {
  
  let component: SalesFormComponent;
  let fixture: ComponentFixture<SalesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SalesFormComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(SalesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
