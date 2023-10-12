import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Params, ResolveFn, RouterStateSnapshot } from "@angular/router";

import { AnimalsService } from "./animals.service";
import { Animal, Sex } from "./animals.model";
import { Observable, of } from "rxjs";

export const animalResolver: ResolveFn<Animal> = (route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot) => {
  return inject(AnimalResolver).resolve(route, routeState);
}

@Injectable({
  providedIn: 'root'
})
export class AnimalResolver {

  constructor(
    private animalsService: AnimalsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, routeState: RouterStateSnapshot): Observable<Animal> {
    return this.get(route.params);
  }

  get({ id }: Params): Observable<Animal> {
    if (id) {
      return this.animalsService.getById(id);
    } else {
      const animal: Animal = {
        identifierNumber: '',
        sex: Sex.FEMALE,
        weight: ''
      };
      return of(animal);
    }
  }

}
