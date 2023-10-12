import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'cattle-paddocks-form',
  templateUrl: './cattle-paddocks-form.component.html'
})
export class CattlePaddocksFormComponent implements OnInit {

  placeholder = 'Select Animal';

  animalsList = [
    { item_id: 1, item_text: '001' },
    { item_id: 2, item_text: '002' },
    { item_id: 3, item_text: '003' },
    { item_id: 4, item_text: '004' },
    { item_id: 5, item_text: '005' }
  ];

  dropdownSettings!: IDropdownSettings;

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    const selectLabel = this.translateService.instant('cattle_paddocks.form.animals.select');
    const unselectLabel = this.translateService.instant('cattle_paddocks.form.animals.unselect');

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: selectLabel,
      unSelectAllText: unselectLabel,
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.placeholder = this.translateService.instant('cattle_paddocks.form.animals.label.placeholer');
  }

  save() {
    this.router.navigate(['home/cattle-paddocks']);
  }

}
