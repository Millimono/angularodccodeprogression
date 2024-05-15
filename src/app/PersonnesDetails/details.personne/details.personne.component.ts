import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnesService } from '../../sservice/personnes.service';
import { Personne } from '../../personne';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-details.personne',
  templateUrl: './details.personne.component.html',
  styleUrl: './details.personne.component.css',
})
export class DetailsPersonneComponent {
  etudiant$: Observable<Personne | undefined> | undefined; // Observable pour une seule personne

  constructor(
    private router: ActivatedRoute,
    private personneService: PersonnesService,
    private route: Router
  ) {}

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.etudiant$ = this.personneService.loadPersonne().pipe(
        map((personnes) => personnes.find((p: { id: number }) => p.id === +id)) // Utiliser '+' pour convertir 'id' en nombre si nécessaire
      );
    }
  }

  goBack() {
    this.route.navigate(['listepersonnes']);
  }
}
