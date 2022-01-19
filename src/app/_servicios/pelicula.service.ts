import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../_modelos/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private URL = 'http://localhost:3000/peliculas/';

  constructor(private http: HttpClient) { }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.URL);
  }

  obtenerPeliculaPorId(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(this.URL + id);
  }

  insertarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.URL, pelicula);
  }

  modificarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(this.URL + pelicula.id, pelicula);
  }

  borrarPelicula(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + id);
  }
}
