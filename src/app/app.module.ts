import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PeliculasComponent } from './_componentes/peliculas/peliculas.component';
import { PeliculaComponent } from './_componentes/pelicula/pelicula.component';
import { FormsModule } from '@angular/forms';
import { LabelInputComponent } from './label-input/label-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    PeliculaComponent,
    LabelInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
