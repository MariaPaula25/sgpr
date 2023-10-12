import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { VaccinateFormComponent } from './vaccinate-form.component';

describe('VaccinateFormComponent', () => {
  
  let component: VaccinateFormComponent;
  let fixture: ComponentFixture<VaccinateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VaccinateFormComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });

    fixture = TestBed.createComponent(VaccinateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // Then
    expect(component).toBeTruthy();
  });

});
