import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Sale } from '../sales.model';

@Component({
  selector: 'sales-list',
  templateUrl: './sales-list.component.html'
})
export class SalesListComponent {

  salesList: Sale[] = [
    {  
      id: '1', 
      name: 'Venda 1',
      date: '01/08/2023',
      description: 'Venda de bezerros',
      qtd: 5,
      totalPrice: 2000 
    },
    {  
      id: '2', 
      name: 'Venda 2',
      date: '25/08/2023',
      description: 'Venda de vacas',
      qtd: 3,
      totalPrice: 5000 
    },
    {  
      id: '3', 
      name: 'Venda 3',
      date: '03/09/2023',
      description: 'Venda de bezerros',
      qtd: 7,
      totalPrice: 4000 
    }
  ];

 constructor(
  private router: Router
 ) { }

  redirectToForm() {
    this.router.navigate(['home/sales/form']);
  }

}
