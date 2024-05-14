import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPersonneComponent } from './PersonnesDetails/details.personne/details.personne.component';
import { ListesPersonnesComponent } from './ListesPersones/listes.personnes/listes.personnes.component';

const routes: Routes = [
  { path: 'listepersonnes', component: ListesPersonnesComponent },
  { path: 'detaislpersonnes/:id', component: DetailsPersonneComponent },
  { path: '', redirectTo: 'listepersonnes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
