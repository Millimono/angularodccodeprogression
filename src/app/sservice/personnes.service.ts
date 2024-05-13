import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../personne';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// {
//   providedIn: 'root',
// }
export class PersonnesService {
  constructor(private http: HttpClient) {
    console.log('Service fournit');
  }

  loadPersonne(): Observable<Personne[]> {
    return this.http.get<Personne[]>('/api/personnes');
  }
}
