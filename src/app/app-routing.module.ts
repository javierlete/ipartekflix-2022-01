import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './_componentes/pelicula/pelicula.component';
import { PeliculasComponent } from './_componentes/peliculas/peliculas.component';

const routes: Routes = [
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pelicula', component: PeliculaComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
