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
import { AlumnoComponent } from './components/alumno/alumno/alumno.component';
import { ProfesorComponent } from './components/profesor/profesor/profesor.component';

const routes: Routes = [
  { path: 'app-index', component: IndexComponent, canActivate: [AuthGuard]},
  { path: 'profesor', component:ProfesorComponent,
    children:[
      { path: 'acerca-profesor', component: AcercaDeProfesorComponent},
      { path: 'inicio-profesor', component: InicioProfesorComponent},
      { path: 'publicaciones-profesor', component: PublicacionesProfesorComponent},
      { path: 'contactanos', component: ContactanosComponent},
      { path: '', component: InicioProfesorComponent}
    ]},
  { path: 'alumno', component:AlumnoComponent,
    children:[
      { path: 'acerca-estudiante', component: AcercaDeEstudianteComponent},
      { path: 'inicio-estudiante', component: InicioEstudiantesComponent,data: { animation: 'InicioEs' }},
      { path: 'publicaciones-estudiante', component: PublicacionesEstudianteComponent,data: { animation: 'PublicaEs' }},
      { path: 'contactanos', component: ContactanosComponent},
      { path: '', component: InicioEstudiantesComponent}
    ]},
  { path: 'administrador', component: AdministradorComponent},
  { path: '', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
