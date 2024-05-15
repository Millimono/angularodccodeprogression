import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnesComponent } from './personnes/personnes.component';
import { HighlightDirective } from './highlight.directive';
import { TooltipDirectiveDirective } from './tooltip-directive.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { ExponentialPipe } from './exponential.pipe';
import { FitredBycategoriePipe } from './fitred-bycategorie.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DetailsPersonneComponent } from './PersonnesDetails/details.personne/details.personne.component';
import { ListesPersonnesComponent } from './ListesPersones/listes.personnes/listes.personnes.component';
import { PersonneInfoComponent } from './PersonneInfo/personne-info/personne-info.component';
import { PersonneContactsComponent } from './PersonneContacts/personne-contacts/personne-contacts.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormEnrermEnreComponent } from './LoginFormEnre/login-form-enrerm-enre/login-form-enrerm-enre.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive/login-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnesComponent,
    HighlightDirective,
    TooltipDirectiveDirective,
    NgxUnlessDirective,
    ExponentialPipe,
    FitredBycategoriePipe,
    DetailsPersonneComponent,
    ListesPersonnesComponent,
    PersonneInfoComponent,
    PersonneContactsComponent,
    LoginFormEnrermEnreComponent,
    LoginReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
