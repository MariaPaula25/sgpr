import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { UsersFormComponent } from './users-form.component';

describe('UsersFormComponent', () => {
  
  let component: UsersFormComponent;
  let fixture: ComponentFixture<UsersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersFormComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(UsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
