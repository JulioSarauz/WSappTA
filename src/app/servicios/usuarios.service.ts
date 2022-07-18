import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioInterfaces } from '../interfaces/INTERFACES';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //ath =  `${environment.host}:${environment.port}`;
  path =  `${environment.host}`;
  constructor(
    private readonly _http:HttpClient
  ) { }

  consultarUsuarios(){
    const segmento = "/api/post.php";
    return this._http.get(`${this.path}${segmento}`);
  }

  actualizarUsuario(user:UsuarioInterfaces){
    const segmento = "/api/post.php";
    return this._http.put(`${this.path}${segmento}?codigo=${user.codigo}&nombre=${user.nombre}&apellido=${user.apellido}&nacimiento=${user.nacimiento}&sexo=${user.sexo}&correo=${user.correo}&contrasena=${user.contrasena}`,{},{headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
  }


}
