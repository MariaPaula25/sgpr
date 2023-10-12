import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

import { Animal, Sex } from '../animals.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'animals-list',
  templateUrl: './animals-list.component.html',
  providers: [MessageService]
})
export class AnimalsListComponent implements OnInit {

  hasToShowDeleteDialog = false;

  animalsList!: Animal[];

  constructor(
    private animalsService: AnimalsService,
    private messageService: MessageService,
    private router: Router,
    private translateService: TranslateService
   ) { }

  ngOnInit() {
    this.animalsService.getAll()
    .subscribe((result: Animal[]) => {
      this.animalsList = result;
    }); 
  }

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
