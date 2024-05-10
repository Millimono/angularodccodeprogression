import { Pipe, PipeTransform } from '@angular/core';
import { Personne } from './personne';

@Pipe({
  name: 'fitredBycategorie',
})
export class FitredBycategoriePipe implements PipeTransform {
  transform(personne: Personne[], categorie: string) {
    return personne.filter((per) => per.categorie === categorie);
  }
}
