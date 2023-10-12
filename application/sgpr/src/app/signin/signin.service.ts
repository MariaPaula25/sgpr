import { Injectable } from '@angular/core';

import { Credentials } from './signin.model';

@Injectable()
export class SigninService {

  signin(credentials: Credentials): boolean {
    const isAdminUser = credentials.username === 'admin' && credentials.password === 'admin';
    const isControllerUser = credentials.username === 'controller' && credentials.password === 'controller';

    return isAdminUser || isControllerUser;
  } 

}