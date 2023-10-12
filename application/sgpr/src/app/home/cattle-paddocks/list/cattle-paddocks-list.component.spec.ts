import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CattlePaddocksListComponent } from './cattle-paddocks-list.component';

describe('CattlePaddocksListComponent', () => {
  
  let component: CattlePaddocksListComponent;
  let fixture: ComponentFixture<CattlePaddocksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CattlePaddocksListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(CattlePaddocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
