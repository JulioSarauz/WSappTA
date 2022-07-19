import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioInterfaces } from 'src/app/interfaces/INTERFACES';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

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

  open(codigo:string, nombre:string, apellido:string, fecha:string, sexo:string, correo:string, clave:string) {
    
    const modalRef = this.modalService.open(ActualizarComponent);
    modalRef.componentInstance.codigo =codigo  ;
    modalRef.componentInstance.nombre =nombre  ;
    modalRef.componentInstance.apellido =apellido  ;
    modalRef.componentInstance.fechaNacimiento =fecha ;
    modalRef.componentInstance.sexo =sexo  ;
    modalRef.componentInstance.correo =correo  ;
    modalRef.componentInstance.clave =clave  ;
  } 

  cerrar(){
    this.codigo;
    this.nombre;
    this.apellido;
    this.fechaNacimiento;
    this.sexo;
    this.correo;
    this.clave;
    const user:UsuarioInterfaces = {
      codigo:this.codigo,
      nombre:this.nombre,
      apellido:this.apellido,
      nacimiento:this.fechaNacimiento,
      sexo:this.sexo,
      correo:this.correo,
      contrasena:this.clave,
    }
    this._srvUsuario.actualizarUsuario(user).subscribe(res=>{
      console.log(res);
        window.location.reload();
        this.modalService.dismissAll();
    })

  }
}
