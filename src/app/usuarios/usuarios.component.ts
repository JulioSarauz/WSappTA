import { Component, OnInit } from '@angular/core';
import { ActualizarComponent } from '../componentes/actualizar/actualizar.component';
import { UsuarioInterfaces } from '../interfaces/INTERFACES';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios:UsuarioInterfaces[] | undefined;
  
  constructor(
    private readonly _srvUsuarios:UsuariosService,
    private readonly _modalActualizar:ActualizarComponent
  ) { }

  ngOnInit(): void {
   this._srvUsuarios.consultarUsuarios().subscribe(res=>{
      this.listaUsuarios = JSON.parse(JSON.stringify(res));
    });
  }

  editar(user:any){
      this._modalActualizar.open(user.codigo, user.nombre, user.apellido, user.nacimiento, user.sexo, user.correo, user.contrasena);
  }

  crear(){
    
  }

  eliminar(codigo:string){
    this._srvUsuarios.eliminarUsuario(codigo).subscribe(res=>{
      console.log(res);
      
    })
  }

}
