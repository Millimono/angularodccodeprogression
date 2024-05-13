import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Inject,
  InjectionToken,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { personnes } from './list_Personne';
import { Personne } from './personne';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonnesService } from './sservice/personnes.service';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';

// const PERSONNE_SERVICE = new InjectionToken<PersonnesService>(
//   'PERSONNE_SERVICE'
// );

// function PersonneProvider(http: HttpClient): PersonnesService {
//   return new PersonnesService(http);
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'OdcFormationCodeEvolutive';
  ab: boolean = false;

  // etudiants: Personne[] = personnes;
  // etudiants: Personne[] = [];
  etudiants$: Observable<Personne[]> | undefined;

  personneselected: Personne | undefined;
  personneName: any;

  constructor(
    private personneService: PersonnesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    console.log(config);
  }

  ngOnInit(): void {
    // console.table(this.etudiants);
    // this.SelectStdent(this.etudiants[0]);
    // this.http.get<Personne[]>('/api/personnes').subscribe(
    //   (data) => {
    //     this.etudiants = data;
    //     console.log('Étudiants chargés:', data);
    //   },
    //   (error) => {
    //     console.error('Erreur lors du chargement des étudiants:', error);
    //   }
    // );
    this.etudiants$ = this.personneService.loadPersonne();
  }

  // SelectStdent(StudentsName: Personne) {
  //   console.log(`Vous avez Mr ${StudentsName.firstName}`);
  // }

  OnpersnneClicked(personneid: string) {
    const id: number = +personneid;
    console.log(id);

    // this.personneselected = this.etudiants[id];

    // console.log(this.etudiants[id]);
  }

  personneselectionne(p: Personne) {
    console.log('vous avez clické sur :', p);
  }

  // ngOnChanges(): void {
  //   console.log('AppComponent: ngOnChanges');
  // }

  // ngDoCheck() {
  //   // Called during every change detection run.
  //   console.log('AppComponent: DoCheck');
  // }

  // ngAfterContentInit() {
  //   // Called after content (ng-content) has been projected into view.
  //   console.log('AppComponent: AfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   // Called after every check of the component's or directive's content.
  //   console.log('AppComponent: AfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   // Called after the component's view (and child views) has been initialized.
  //   console.log('AppComponent: AfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   // Called after every check of the component's view (and child views).
  //   console.log('AppComponent: AfterViewChecked');
  // }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
}
