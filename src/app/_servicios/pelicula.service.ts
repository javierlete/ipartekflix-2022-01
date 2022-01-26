import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Nivel } from '../_modelos/alerta';
import { Pelicula } from '../_modelos/pelicula';
import { AlertaService } from './alerta.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private URL = 'http://localhost:3000/peliculas/';

  constructor(private http: HttpClient, private alertaService: AlertaService) { }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.URL).pipe(
      tap(_ => this.log('Se han recibido las películas', 'success')),
      catchError(this.gestionarError<Pelicula[]>('No se han podido recibir las películas', []))
    );
  }

  obtenerPeliculaPorId(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(this.URL + id).pipe(
      tap(_ => this.log('Se ha recibido la película ' + id, 'success')),
      catchError(this.gestionarError<Pelicula>('No se ha podido recibir la película'))
    );
  }

  insertarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.URL, pelicula).pipe(
      tap(_ => this.log('Se ha insertado la película ' + JSON.stringify(pelicula), 'success')),
      catchError(this.gestionarError<Pelicula>('No se ha podido insertar la película'))
    );
  }

  modificarPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.put<Pelicula>(this.URL + pelicula.id, pelicula).pipe(
      tap(_ => this.log('Se ha modificado la película', 'success')),
      catchError(this.gestionarError<Pelicula>('No se ha podido modificar la película'))
    );
  }

  borrarPelicula(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + id).pipe(
      tap(_ => this.log('Se ha borrado la película', 'success')),
      catchError(this.gestionarError<Pelicula[]>('No se ha podido borrar la película'))
    );
  }

  private gestionarError<T>(mensaje: string, respuesta?: T) {
    return ((err: any): Observable<T> => {
      this.alertaService.nuevaAlerta(mensaje + ": " + err.message, 'danger');
      return of(respuesta as T);
    });
  }

  private log(mensaje: string, nivel: Nivel) {
    this.alertaService.nuevaAlerta(mensaje, nivel);

    switch(nivel) {
      case 'info': console.info(mensaje); break;
      case 'success': console.log(mensaje); break;
      case 'warning': console.warn(mensaje); break;
      case 'danger': console.error(mensaje); break;
      default: throw 'No me esperaba ese tipo de mensaje';
    }
  }
}
