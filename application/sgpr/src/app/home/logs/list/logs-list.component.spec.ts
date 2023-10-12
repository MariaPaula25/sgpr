import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LogsListComponent } from './logs-list.component';

describe('LogsListComponent', () => {
  
  let component: LogsListComponent;
  let fixture: ComponentFixture<LogsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogsListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(LogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
