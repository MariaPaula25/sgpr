import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { VaccinateListComponent } from './vaccinate-list.component';

describe('VaccinateListComponent', () => {
  
  let component: VaccinateListComponent;
  let fixture: ComponentFixture<VaccinateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VaccinateListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(VaccinateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
