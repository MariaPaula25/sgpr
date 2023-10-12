import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animals.model';

@Component({
  selector: 'animals-form',
  templateUrl: './animals-form.component.html'
})
export class AnimalsFormComponent implements OnInit {

  animal!: Animal;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.animal = this.activatedRoute.snapshot?.data?.['animal'];
    console.log(this.animal);
  }

  save() {
    this.router.navigate(['home/animals']);
  }
  
}
