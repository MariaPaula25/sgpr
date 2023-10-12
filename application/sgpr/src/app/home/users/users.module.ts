import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'
import { TableModule } from 'primeng/table';

import { UsersFormComponent } from './form/users-form.component';
import { UsersListComponent } from './list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    TableModule,
    TranslateModule
  ],
  declarations: [
    UsersFormComponent,
    UsersListComponent
  ]
})
export class UsersModule { }
