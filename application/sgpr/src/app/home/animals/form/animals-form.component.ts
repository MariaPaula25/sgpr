import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'animals-form',
  templateUrl: './animals-form.component.html'
})
export class AnimalsFormComponent {

  isEditing = false;

  constructor(
    private router: Router
  ) { }

  save() {
    this.router.navigate(['home/animals']);
  }
  
}
