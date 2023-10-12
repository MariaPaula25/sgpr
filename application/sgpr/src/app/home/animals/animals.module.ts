import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { AnimalsFormComponent } from './form/animals-form.component';
import { AnimalsListComponent } from './list/animals-list.component';
import { AnimalsService } from './animals.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DialogModule,
    FormsModule,
    TableModule,
    ToastModule,
    TranslateModule
  ],
  declarations: [
    AnimalsListComponent,
    AnimalsFormComponent
  ],
  providers: [
    AnimalsService
  ],
  exports: [
    AnimalsListComponent,
    AnimalsFormComponent
  ]
})
export class AnimalsModule { }
