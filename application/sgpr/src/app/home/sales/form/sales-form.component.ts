import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sales-form',
  templateUrl: './sales-form.component.html'
})
export class SalesFormComponent {

  constructor(
    private router: Router
  ) { }

  save() {
    this.router.navigate(['home/sales']);
  }

}
