import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User, UserType } from '../users.model';

@Component({
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {

  usersList: User[] = [
    {
      id: '1',
      username: 'maria',
      name: 'Maria Paula de Oliveira',
      email: 'maria@test',
      phone: '55 (35) 9999 8888',
      type: UserType.CONTROLLER
    },
    {
      id: '2',
      username: 'sonia',
      name: 'Sonia Maria de Oliveira',
      email: 'sonia@test',
      phone: '55 (35) 9999-7777',
      type: UserType.CONTROLLER
    },
    {
      id: '3',
      username: 'gabriel',
      name: 'Gabriel da Costa Morais',
      email: 'gabriel@test',
      phone: '55 (35) 9999-6666',
      type: UserType.CONTROLLER
    }
  ];

  constructor(
    private router: Router
  ) { }

  redirectToForm() {
    this.router.navigate(['home/users/form']);
  }

}
