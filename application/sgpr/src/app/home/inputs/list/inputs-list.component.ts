import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Input } from '../inputs.model';

@Component({
  selector: 'inputs-list',
  templateUrl: './inputs-list.component.html'
})
export class InputsListComponent {

  inputsList: Input[] = [
    {
      rowid: '1',
      name: 'Ripercol', 
      date: '01/08/2025', 
      qtd: 5 
    },
    {
      rowid: '2',
      name: 'Ivomec', 
      date: '01/09/2026', 
      qtd: 6 
    },
    {
      rowid: '3',
      name: 'Ectonil', 
      date: '01/10/2027', 
      qtd: 7 
    }
  ];

 constructor(
  private router: Router
 ) { }

  redirectToForm() {
    this.router.navigate(['home/inputs/form']);
  }

}
