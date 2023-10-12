import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animals.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'animals-form',
  templateUrl: './animals-form.component.html'
})
export class AnimalsFormComponent implements OnInit {

  animal!: Animal;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.animal = this.activatedRoute.snapshot?.data?.['animal'];
  }

  save() {
    if (this.animal.id) {
      this.animalsService.update(this.animal).subscribe(
        () => this.handleResponse(),
        () => this.handleResponse()
      );
    } else {
      this.animalsService.save(this.animal).subscribe(
        () => this.handleResponse(),
        () => this.handleResponse()
      );
    }
  }

  private handleResponse() {
    this.router.navigate(['home/animals']);
  }
  
}
