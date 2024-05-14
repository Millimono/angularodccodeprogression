import { Component } from '@angular/core';
import { Personne } from '../../personne';
import { Observable } from 'rxjs';
import { PersonnesService } from '../../sservice/personnes.service';

@Component({
  selector: 'app-listes.personnes',
  templateUrl: './listes.personnes.component.html',
  styleUrl: './listes.personnes.component.css',
})
export class ListesPersonnesComponent {
  etudiants$: Observable<Personne[]> | undefined;

  personneselected: Personne | undefined;
  personneName: any;

  constructor(private personneService: PersonnesService) {}

  ngOnInit(): void {
    this.etudiants$ = this.personneService.loadPersonne();
  }

  OnpersnneClicked(personneid: string) {
    const id: number = +personneid;
    console.log(id);
  }

  personneselectionne(p: Personne) {
    console.log('vous avez clické sur :', p);
  }
}
