import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuOption } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  administrativeItems: MenuOption[] = [
    { id: 'animals', route: '/home/animals', label: 'menu.animals' },
    { id: 'vaccinate', route: '/home/vaccinate', label: 'menu.vaccinate' },
    { id: 'cattlePaddocks', route: '/home/cattle-paddocks', label: 'menu.cattle_paddocks' },
    { id: 'inputs', route: '/home/inputs', label: 'menu.inputs' },
    { id: 'sales', route: '/home/sales', label: 'menu.sales' },
  ];

  controlNavItems: MenuOption[] = [
    { id: 'users', route: '/home/users', label: 'menu.users' },
    { id: 'logs', route: '/home/logs', label: 'menu.logs' },
  ];

  selectedMenuOption!: string;
  hasToShowUsersOption = false;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    const state: any = this.location.getState();
    this.hasToShowUsersOption = state?.hasToShowUsersOption;

    this.selectOption(this.administrativeItems[0]);
  }

  selectOption(item: MenuOption) {
    if (item.id === this.selectedMenuOption) {
      return;
    }
  
    this.selectedMenuOption = item.id;
    this.router.navigate([item.route]);
  }

  logout() {
    this.router.navigate(['']);
  }

}
