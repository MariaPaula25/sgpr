import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inputs-form',
  templateUrl: './inputs-form.component.html'
})
export class InputsFormComponent {

  constructor(
    private router: Router
  ) { }

  save() {
    this.router.navigate(['home/inputs']);
  }

}
