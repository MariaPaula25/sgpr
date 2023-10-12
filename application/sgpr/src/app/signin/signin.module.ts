import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SigninComponent } from './signin.component';
import { SigninService } from './signin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    SigninComponent
  ],
  providers: [
    SigninService
  ]
})
export class SigninModule { }
