import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vaccinate-form',
  templateUrl: './vaccinate-form.component.html'
})
export class VaccinateFormComponent {

  constructor(
    private router: Router
  ) { }

  save() {
    this.router.navigate(['home/vaccinate']);
  }

}
