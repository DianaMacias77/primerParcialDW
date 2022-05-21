import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard} from '@auth0/auth0-angular';
import { IndexComponent } from './components/index/index.component';

import{AcercaDeEstudianteComponent}from './components/alumno/acerca-de-estudiante/acerca-de-estudiante.component';
import { InicioProfesorComponent } from './components/profesor/inicio-profesor/inicio-profesor.component';
import { AcercaDeProfesorComponent } from './components/profesor/acerca-de-profesor/acerca-de-profesor.component';
import { PublicacionesProfesorComponent } from './components/profesor/publicaciones-profesor/publicaciones-profesor.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { InicioEstudiantesComponent } from './components/alumno/inicio-estudiantes/inicio-estudiantes.component';
import { PublicacionesEstudianteComponent } from './components/alumno/publicaciones-estudiante/publicaciones-estudiante.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

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
