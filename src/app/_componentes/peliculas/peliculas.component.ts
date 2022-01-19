import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/_modelos/pelicula';
import { PeliculaService } from 'src/app/_servicios/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe(pelis => this.peliculas = pelis);
  }

  borrar(id: number) {
    console.log(id);
  }
}
