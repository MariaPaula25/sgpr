import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TableModule } from 'primeng/table';

import { CattlePaddocksListComponent } from './list/cattle-paddocks-list.component';
import { CattlePaddocksFormComponent } from './form/cattle-paddocks-form.component';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    TableModule,
    TranslateModule
  ],
  declarations: [
    CattlePaddocksFormComponent,
    CattlePaddocksListComponent
  ]
})
export class CattlePaddocksModule { }
