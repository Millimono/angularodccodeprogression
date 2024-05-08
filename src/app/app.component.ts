import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { personnes } from './list_Personne';
import { Personne } from './personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'OdcFormationCodeEvolutive';

  etudiants: Personne[] = personnes;

  ngOnInit(): void {
    console.table(this.etudiants);
    this.SelectStdent(this.etudiants[0].firstName);
  }

  SelectStdent(StudentsName: string) {
    console.log(`Vous avez Mr ${StudentsName}`);
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
