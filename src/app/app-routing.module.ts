import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LogeoComponent } from './logeo/logeo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/logeo'
  },
  {
    path:'logeo',
    component:LogeoComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'usuarios',
    component:UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
