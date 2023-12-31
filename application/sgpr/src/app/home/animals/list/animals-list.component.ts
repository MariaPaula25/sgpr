import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'animals-list',
  templateUrl: './animals-list.component.html',
  providers: [MessageService]
})
export class AnimalsListComponent implements OnInit, OnDestroy {

  hasToShowDeleteDialog = false;

  animalsList!: Animal[];
  selectedAnimal?: Animal;

  getListSubscription?: Subscription;
  deleteSubscription?: Subscription;

  constructor(
    private animalsService: AnimalsService,
    private messageService: MessageService,
    private router: Router,
    private translateService: TranslateService
   ) { }

  ngOnInit() {
    this.getList();
  }

  ngOnDestroy() {
    this.getListSubscription?.unsubscribe();
    this.deleteSubscription?.unsubscribe();
  }

  redirectToForm() {
    this.router.navigate(['home/animals/form']);
  }

  showDialog (animal: Animal) {
    this.selectedAnimal = animal;
    this.hasToShowDeleteDialog = true;
  }

  editAnimal(animal: Animal) {
    this.router.navigate([`home/animals/form/${animal.rowid}`]);
  }

  removeAnimal() {
    this.hasToShowDeleteDialog = false;

    this.deleteSubscription = this.animalsService.delete(this.selectedAnimal?.rowid).subscribe(
      () => {
        this.selectedAnimal = undefined;

        this.messageService.add({ 
          severity: 'success', 
          summary: this.translateService.instant('animals.list.toast.success'), 
          detail: this.translateService.instant('animals.list.toast.success_content')
        });

        this.getList();
        
      });
  }

  getList() {
    this.getListSubscription = this.animalsService.getAll()
    .subscribe((result: Animal[]) => {
      this.animalsList = result;
    }); 
  }

}
