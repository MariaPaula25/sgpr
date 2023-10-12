import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { InputsListComponent } from './list/inputs-list.component';
import { InputsFormComponent } from './form/inputs-form.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TranslateModule
  ],
  declarations: [
    InputsListComponent,
    InputsFormComponent
  ]
})
export class InputsModule { }
