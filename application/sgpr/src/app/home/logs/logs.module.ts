import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { LogsListComponent } from './list/logs-list.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    TranslateModule
  ],
  declarations: [
    LogsListComponent
  ]
})
export class LogsModule { }
