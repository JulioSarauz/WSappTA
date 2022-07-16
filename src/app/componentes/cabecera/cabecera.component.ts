import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("sesion") === "0"){
      this._router.navigate(["/logeo"]);
    }
  }



  cerrarSesion(){
    localStorage.setItem("sesion","0");
    this._router.navigate(["/logeo"]);
  }

}
