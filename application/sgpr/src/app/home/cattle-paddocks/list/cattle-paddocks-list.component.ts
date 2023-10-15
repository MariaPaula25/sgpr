import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CattlePaddock } from '../cattle-paddocks.model';

@Component({
  selector: 'cattle-paddocks-list',
  templateUrl: './cattle-paddocks-list.component.html'
})
export class CattlePaddocksListComponent {

cattlePaddocksList: CattlePaddock[] = [
  { 
    rowid: '1', 
    name: 'Piquete 1', 
    description: '10 Hectares', 
    animalsQtd: 16 
  },
  { 
    rowid: '2', 
    name: 'Piquete 2',
    description: '7 Hectares', 
    animalsQtd: 12 
  },
  { 
    rowid: '3',
    name: 'Piquete 3', 
    description: '12 Hectares', 
    animalsQtd: 20 
  }
 ];

 constructor(
  private router: Router
 ) { }

  redirectToForm() {
    this.router.navigate(['home/cattle-paddocks/form']);
  }

}
