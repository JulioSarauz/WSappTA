import { Component, OnInit } from '@angular/core';
import { ActualizarComponent } from '../componentes/actualizar/actualizar.component';
import { CrearComponent } from '../componentes/crear/crear.component';
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
    private readonly _modalActualizar:ActualizarComponent,
    private readonly _modalCrear:CrearComponent
  ) { }

  ngOnInit(): void {
   this._srvUsuarios.consultarUsuarios().subscribe(res=>{
      this.listaUsuarios = JSON.parse(JSON.stringify(res));
      console.log(this.listaUsuarios);
      
    });
  }

  editar(user:any){
      this._modalActualizar.open(user.codigo, user.nombre, user.apellido, user.nacimiento, user.sexo, user.correo, user.contrasena);
  }

  crear(){
    this._modalCrear.open();
  }

  eliminar(codigo:string){
    this._srvUsuarios.eliminarUsuario(codigo).subscribe(res=>{
      window.location.reload();
    })
  }

}
