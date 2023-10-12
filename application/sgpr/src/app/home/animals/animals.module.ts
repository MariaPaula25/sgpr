import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { AnimalsFormComponent } from './form/animals-form.component';
import { AnimalsListComponent } from './list/animals-list.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TranslateModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalsFormComponent
  ],
  exports: [
    AnimalsListComponent,
    AnimalsFormComponent
  ]
})
export class AnimalsModule { }
