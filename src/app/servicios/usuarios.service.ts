import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioInterfaces } from '../interfaces/INTERFACES';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  path =  `${environment.host}:${environment.port}`;
  constructor(
    private readonly _http:HttpClient
  ) { }

  consultarUsuarios(){
    const segmento = "/api/post.php";
    return this._http.get(`${this.path}${segmento}`);
  }

  actualizarUsuario(user:UsuarioInterfaces){
    const segmento = "/api/post.php";
    return this._http.put(`${this.path}${segmento}`,user);
  }


}
