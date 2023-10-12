import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Animal } from "./animals.model";

@Injectable()
export class AnimalsService {

  url = 'http://localhost:3000/animals'

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.url}/getAll`);
  }
  
  getById(animalId: string): Observable<Animal> {
    return this.httpClient.get<Animal>(`${this.url}/get/${animalId}`);
  }

  save(animal: Animal): Observable<any> {
    return this.httpClient.post(`${this.url}/create`, animal);
  }

  update(animal: Animal): Observable<any> {
    return this.httpClient.put(`${this.url}/edit`, animal);
  }

  delete(animalId: any): Observable<any> {
    return this.httpClient.delete(`${this.url}/delete/${animalId}`);
  }

}
