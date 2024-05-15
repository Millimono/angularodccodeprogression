import { Component } from '@angular/core';
import { Personne } from '../../personne';
import { ActivatedRoute } from '@angular/router';
import { PersonnesService } from '../../sservice/personnes.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-personne-info',
  templateUrl: './personne-info.component.html',
  styleUrl: './personne-info.component.css',
})
export class PersonneInfoComponent {
  etudiant: Personne | undefined;
  constructor(
    private route: ActivatedRoute,
    private personnesService: PersonnesService
  ) {}

  ngOnInit() {
    this.route
      .parent!.params.pipe(
        switchMap((params) => {
          const id = +params['id'];

          return this.personnesService.loadPersonne().pipe(
            map((personnes: any[]) => {
              const foundPersonne = personnes.find((p) => p.id === id);
              return foundPersonne;
            })
          );
        })
      )
      .subscribe(
        (etudiant) => {
          this.etudiant = etudiant;
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération des données de l'étudiant",
            error
          );
        }
      );
  }
}
