import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrl: './personnes.component.css',
})
export class PersonnesComponent {
  @Input()
  nom: string = '';
  constructor() {}
}
