import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPersonneComponent } from './PersonnesDetails/details.personne/details.personne.component';
import { ListesPersonnesComponent } from './ListesPersones/listes.personnes/listes.personnes.component';
import { PersonneInfoComponent } from './PersonneInfo/personne-info/personne-info.component';
import { PersonneContactsComponent } from './PersonneContacts/personne-contacts/personne-contacts.component';
import { LoginFormEnrermEnreComponent } from './LoginFormEnre/login-form-enrerm-enre/login-form-enrerm-enre.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive/login-reactive.component';

const routes: Routes = [
  { path: 'listepersonnes', component: ListesPersonnesComponent },
  { path: 'login', component: LoginFormEnrermEnreComponent },
  { path: 'loginR', component: LoginReactiveComponent },

  {
    path: 'detaislpersonnes/:id',
    component: DetailsPersonneComponent,

    children: [
      { path: 'info', component: PersonneInfoComponent },
      { path: 'contacts', component: PersonneContactsComponent },
    ],
  },
  { path: '', redirectTo: 'listepersonnes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
