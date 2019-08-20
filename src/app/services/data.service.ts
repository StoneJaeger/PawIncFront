import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000/api';

interface PetResponse {
  data: String
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pets = new BehaviorSubject<any>([]);
  pet = this.pets.asObservable();

  constructor(private http: HttpClient) {
    this.getPets();
  }

  getPets() {
    this.http.get(`${API_URL}/pets`).subscribe(data => {
      this.pets.next(data);
    });
  }

  cleanPets() {
    return this.http.get<PetResponse>(`${API_URL}/cleanpets`);
  }
}
