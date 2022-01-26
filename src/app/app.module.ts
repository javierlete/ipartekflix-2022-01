import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PeliculasComponent } from './_componentes/peliculas/peliculas.component';
import { PeliculaComponent } from './_componentes/pelicula/pelicula.component';
import { FormsModule } from '@angular/forms';
import { LabelInputComponent } from './_componentes/label-input/label-input.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { EuroPipe } from './_pipes/euro.pipe';
import { CajaDirective } from './_directivas/caja.directive';
import { AlertaComponent } from './_componentes/alerta/alerta.component';

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    LabelInputComponent,
    EuroPipe,
    CajaDirective,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
