import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CattlePaddocksFormComponent } from './cattle-paddocks-form.component';

describe('CattlePaddocksFormComponent', () => {
  
  let component: CattlePaddocksFormComponent;
  let fixture: ComponentFixture<CattlePaddocksFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CattlePaddocksFormComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(CattlePaddocksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
