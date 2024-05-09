import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrl: './personnes.component.css',
})
export class PersonnesComponent {
  @Input()
  personne!: Personne;

  @Input()
  index!: number;

  @Input()
  noImageTmpl: TemplateRef<any> | null = null;

  @Output()
  personneselected = new EventEmitter<Personne>();

  constructor() {}

  OnpersennedView() {
    console.log('personne clické');
    this.personneselected.emit(this.personne);
  }

  CouleurParAge() {
    if (this.personne.age < 25) {
      return 'jeune';
    } else if (this.personne.age > 25 && this.personne.age < 60) {
      return 'adulte';
    } else {
      return 'senior';
    }
  }

  get ageClass() {
    return {
      jeune: this.personne.age < 25,
      adulte: this.personne.age >= 25 && this.personne.age < 65,
      senior: this.personne.age >= 65,
    };
  }

  get PersonStyle() {
    if (this.personne.age < 25) {
      return { border: '20px solid blue' };
    } else if (this.personne.age >= 25 && this.personne.age < 65) {
      return { border: '20px solid green' };
    } else {
      return { border: '20px solid gray' };
    }
  }
}
