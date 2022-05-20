import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard} from '@auth0/auth0-angular';
import { IndexComponent } from './index/index.component';

import{AcercaDeEstudianteComponent}from './acerca-de-estudiante/acerca-de-estudiante.component';
import { InicioProfesorComponent } from './inicio-profesor/inicio-profesor.component';
import { AcercaDeProfesorComponent } from './acerca-de-profesor/acerca-de-profesor.component';
import { PublicacionesProfesorComponent } from './publicaciones-profesor/publicaciones-profesor.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioEstudiantesComponent } from './inicio-estudiantes/inicio-estudiantes.component';
import { PublicacionesEstudianteComponent } from './publicaciones-estudiante/publicaciones-estudiante.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  { path: 'app-index', component: IndexComponent, canActivate: [AuthGuard]},
  { path: 'acerca-estudiante', component: AcercaDeEstudianteComponent},
  { path: 'acerca-profesor', component: AcercaDeProfesorComponent},
  { path: 'inicio-profesor', component: InicioProfesorComponent},
  { path: 'inicio-estudiante', component: InicioEstudiantesComponent,data: { animation: 'InicioEs' }},
  { path: 'publicaciones-estudiante', component: PublicacionesEstudianteComponent,data: { animation: 'PublicaEs' }},
  { path: 'publicaciones-profesor', component: PublicacionesProfesorComponent},
  { path: 'administrador', component: AdministradorComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: '', component: IndexComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
