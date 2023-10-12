import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  placeholder = 'Select UserType';

  userTypeList = [
    { item_id: 1, item_text: 'CONTROLLER' },
    { item_id: 2, item_text: 'OBSERVER' }
  ];

  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    allowSearchFilter: false
  };

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.placeholder = this.translateService.instant('users.form.identifier.type.label.placeholder');
  }

  save() {
    this.router.navigate(['home/users']);
  }

}
