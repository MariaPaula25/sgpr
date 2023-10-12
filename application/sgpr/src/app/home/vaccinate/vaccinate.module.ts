import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { VaccinateFormComponent } from './form/vaccinate-form.component';
import { VaccinateListComponent } from './list/vaccinate-list.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TranslateModule
  ],
  declarations: [
    VaccinateFormComponent,
    VaccinateListComponent
  ]
})
export class VaccinateModule { }
