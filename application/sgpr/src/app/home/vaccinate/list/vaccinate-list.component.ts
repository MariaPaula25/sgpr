import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Vaccinate, VaccinateStatus } from '../vaccinate.model';

@Component({
  selector: 'vaccinate-list',
  templateUrl: './vaccinate-list.component.html'
})
export class VaccinateListComponent {

  vaccinateList: Vaccinate[] = [
    {
      rowid: '1',
      name: 'Brucelose - B19', 
      description: 'fêmeas bovinas entre 3 e 8 meses', 
      dosage: '2ml', 
      period: 'anualmente', 
      status: VaccinateStatus.DONE 
    },
    {
      rowid: '2',
      name: 'aftosa', 
      description: 'todo rebanho', 
      dosage: '2ml', 
      period: 'anualmente', 
      status: VaccinateStatus.PENDING 
    }
  ];

  constructor(
    private router: Router
  ) { }

  redirectToForm() {
    this.router.navigate(['home/vaccinate/form']);
  }

}
