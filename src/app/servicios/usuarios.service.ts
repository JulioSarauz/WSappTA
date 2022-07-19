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
    const segmento = "/api/app.php";
    return this._http.get(`${this.path}${segmento}`);
  }
  crearUsuario(user:UsuarioInterfaces){
      const segmento = "/api/app.php";
      return this._http.post(`${this.path}${segmento}?nombre=${user.nombre}&apellido=${user.apellido}&nacimiento=${user.nacimiento}&sexo=${user.sexo}&correo=${user.correo}&contrasena=${user.contrasena}`,{},{headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
  }

  actualizarUsuario(user:UsuarioInterfaces){
    const segmento = "/api/app.php";
    return this._http.put(`${this.path}${segmento}?codigo=${user.codigo}&nombre=${user.nombre}&apellido=${user.apellido}&nacimiento=${user.nacimiento}&sexo=${user.sexo}&correo=${user.correo}&contrasena=${user.contrasena}`,{},{headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')});
  }

  eliminarUsuario(codigo:string){
    const segmento = "/api/app.php";
    return this._http.delete(`${this.path}${segmento}?metodo=${codigo}`,{});
  }

}
