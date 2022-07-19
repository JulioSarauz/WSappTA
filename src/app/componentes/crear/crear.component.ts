import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioInterfaces } from 'src/app/interfaces/INTERFACES';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private readonly _srvUsuario:UsuariosService
  ) { }

  codigo:string ="";
  nombre:string ="";
  apellido:string ="";
  fechaNacimiento:string ="";
  sexo:string ="";
  correo:string ="";
  clave:string ="";

ngOnInit(): void {
    console.log(this.codigo);
    
  }

  open() {
    const modalRef = this.modalService.open(CrearComponent);
  } 

  cerrar(){
    const user:UsuarioInterfaces = {
      codigo:this.codigo,
      nombre:this.nombre,
      apellido:this.apellido,
      nacimiento:this.fechaNacimiento,
      sexo:this.sexo,
      correo:this.correo,
      contrasena:this.clave,
    }
    this._srvUsuario.crearUsuario(user).subscribe(res=>{
      console.log(res);
    window.location.reload;
    this.modalService.dismissAll();
    })
    
  }

}
