import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Credentials } from './signin.model';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  credentials!: Credentials;

  errorMessage = '';

  constructor(
    private router: Router,
    private signinService: SigninService
  ) { 
    this.initializeCredentials();
  }

  clearErroMessage() {
    this.errorMessage = '';
  }

  signing() {
    this.signinService.signin(this.credentials) 
      ? this.handleSuccess() 
      : this.handleError();
  }

  private handleSuccess() {
    const hasToShowUsersOption = this.credentials.username === 'admin';
    this.router.navigate(['home'], { state: { hasToShowUsersOption: hasToShowUsersOption } });
  }

  private handleError() {
    this.errorMessage = 'signin.signin.error_message';
    this.initializeCredentials();
  }

  private initializeCredentials() {
    this.credentials = {
      username: '',
      password: ''
    };    
  }

}
