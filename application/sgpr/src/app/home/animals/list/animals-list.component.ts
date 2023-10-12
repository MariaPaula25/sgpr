import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Animal, Sex } from '../animals.model';

@Component({
  selector: 'animals-list',
  templateUrl: './animals-list.component.html'
})
export class AnimalsListComponent {

  animalsList: Animal[] = [
   {
      identifierNumber: 't', 
      sex: Sex.FEMALE, 
      weight: 11
    },
    {
      identifierNumber: 't',
      sex: Sex.FEMALE,
      weight: 11
    },
    {
      identifierNumber: 't',
      sex: Sex.FEMALE,
      weight: 11
    }
  ]

  constructor(
    private router: Router
   ) { }

  redirectToForm() {
    this.router.navigate(['home/animals/form']);
  }

}
