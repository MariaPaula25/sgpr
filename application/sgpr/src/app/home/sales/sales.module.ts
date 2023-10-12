import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { SalesListComponent } from './list/sales-list.component';
import { SalesFormComponent } from './form/sales-form.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TranslateModule
  ],
  declarations: [
    SalesListComponent,
    SalesFormComponent
  ]
})
export class SalesModule { }
