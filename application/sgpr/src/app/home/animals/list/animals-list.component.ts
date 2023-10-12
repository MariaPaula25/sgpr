import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

import { Animal, Sex } from '../animals.model';

@Component({
  selector: 'animals-list',
  templateUrl: './animals-list.component.html',
  providers: [MessageService]
})
export class AnimalsListComponent {

  hasToShowDeleteDialog = false;

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
    private messageService: MessageService,
    private router: Router,
    private translateService: TranslateService
   ) { }

  redirectToForm() {
    this.router.navigate(['home/animals/form']);
  }

  showDialog () {
    this.hasToShowDeleteDialog = true;
  }

  removeAnimal() {
    this.hasToShowDeleteDialog = false;

    this.messageService.add({ 
      severity: 'success', 
      summary: this.translateService.instant('animals.list.toast.success'), 
      detail: this.translateService.instant('animals.list.toast.success_content')
    });
  }

}
