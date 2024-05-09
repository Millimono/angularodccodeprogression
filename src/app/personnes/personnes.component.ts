import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrl: './personnes.component.css',
})
export class PersonnesComponent {
  @Input()
  personne!: Personne;

  @Output()
  personneselected = new EventEmitter<Personne>();

  constructor() {}

  OnpersennedView() {
    console.log('personne clické');
    this.personneselected.emit(this.personne);
  }
}
