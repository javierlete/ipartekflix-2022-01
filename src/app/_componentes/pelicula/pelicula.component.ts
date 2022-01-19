import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/_modelos/pelicula';
import { PeliculaService } from 'src/app/_servicios/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula = {
    id: 0, titulo: '', descripcion: '', estreno: new Date(), valoracion: 3
  };

  constructor(private peliculaService: PeliculaService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    console.log(id);

    if(id) {
      this.peliculaService.obtenerPeliculaPorId(id).subscribe(peli => this.pelicula = peli);
    }
  }

  guardar() {
    if(this.pelicula.id) {
      this.peliculaService.modificarPelicula(this.pelicula).subscribe(
        _ => this.location.back()
      )
    } else {
      this.peliculaService.insertarPelicula(this.pelicula).subscribe(
        _ => this.location.back()
      )
    }
  }
}
