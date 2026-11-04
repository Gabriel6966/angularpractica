import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import Login from '../models/login';
import Cubo from '../models/Cubo';
import Comentario from '../models/Comentario';
import Compra from '../models/Compra';
import Usuario from '../models/Usuario';

@Injectable({ providedIn: 'root' })
export class ServiceCubos {
  url = environment.urlCubos;

  constructor(private _http: HttpClient) {}

  getCubos(): Observable<Cubo[]> {
    return this._http.get<Cubo[]>(this.url + 'api/Cubos');
  }

  getMarcas(): Observable<string[]> {
    return this._http.get<string[]>(this.url + 'api/Cubos/Marcas');
  }

  getCubosByMarca(marca: string): Observable<Cubo[]> {
    return this._http.get<Cubo[]>(
      this.url + 'api/Cubos/CubosMarca/' + marca,
    );
  }

  getCuboById(id: number): Observable<Cubo> {
    return this._http.get<Cubo>(this.url + 'api/Cubos/' + id);
  }

  getComentarios(id: number): Observable<Comentario[]> {
    return this._http.get<Comentario[]>(
      this.url + 'api/ComentariosCubo/GetComentariosCubo/' + id,
    );
  }

  getToken(login: Login): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(
      this.url + 'api/Manage/Login',
      JSON.stringify(login),
      { headers: header },
    );
  }

  getPerfil(): Observable<Usuario> {
    let header = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('authToken'),
    );
    return this._http.get<Usuario>(this.url + 'api/Manage/PerfilUsuario', {
      headers: header,
    });
  }

  getHistorialCompras(): Observable<Compra[]> {
    let header = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('authToken'),
    );
    return this._http.get<Compra[]>(this.url + 'api/Compra/ComprasUsuario', {
      headers: header,
    });
  }

  comprarCubo(id: number): Observable<any> {
    let header = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('authToken'),
    );
    return this._http.post(this.url + 'api/Compra/InsertarPedido/' + id, null, {
      headers: header,
    });
  }
}
