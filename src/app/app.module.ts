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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
