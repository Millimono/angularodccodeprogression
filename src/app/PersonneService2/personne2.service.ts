import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../personne';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Personne2Service {
  constructor(private http: HttpClient) {
    console.log('Service fournit');
  }

  async loadPersonne(): Promise<Personne[]> {
    const $p = this.http.get<Personne[]>('/api/personnes');
    return firstValueFrom($p);
  }
}
