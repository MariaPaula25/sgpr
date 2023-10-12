import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AnimalsListComponent } from './animals-list.component';

describe('AnimalsListComponent', () => {
  
  let component: AnimalsListComponent;
  let fixture: ComponentFixture<AnimalsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnimalsListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(AnimalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
