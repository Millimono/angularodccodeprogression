import { Component } from '@angular/core';
import { Personne } from '../../personne';
import { Observable } from 'rxjs';
import { PersonnesService } from '../../sservice/personnes.service';
import { Personne2Service } from '../../PersonneService2/personne2.service';

@Component({
  selector: 'app-listes.personnes',
  templateUrl: './listes.personnes.component.html',
  styleUrl: './listes.personnes.component.css',
})
export class ListesPersonnesComponent {
  etudiants$: Observable<Personne[]> | undefined;
  etudiants2$: Personne[] = [];

  personneselected: Personne | undefined;
  personneName: any;

  constructor(
    private personneService: PersonnesService,
    private personneService2: Personne2Service
  ) {}

  async ngOnInit(): Promise<void> {
    this.etudiants$ = this.personneService.loadPersonne();
    this.etudiants2$ = await this.personneService2.loadPersonne();
  }

  OnpersnneClicked(personneid: string) {
    const id: number = +personneid;
    console.log(id);
  }

  personneselectionne(p: Personne) {
    console.log('vous avez clické sur :', p);
  }
}
