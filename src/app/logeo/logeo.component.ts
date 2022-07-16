import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.scss']
})
export class LogeoComponent implements OnInit {


  user: any;
  clave: any;


  constructor(
    private readonly _router:Router
  ) {}

  ngOnInit(): void {
    if(localStorage.getItem("sesion")==="1"){
      this._router.navigate(["/inicio"])
    }
  }


  iniciarSesion(){
    console.log();
    if(this.user !== undefined && this.clave !== undefined){
      if(this.user === "admin"){
        if(this.clave === "123"){
          localStorage.setItem("sesion","1")
          this._router.navigate(["/inicio"]);
        }
      }
    }
    
  }

}
