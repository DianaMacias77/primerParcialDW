import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { InicioProfesorComponent } from './inicio-profesor/inicio-profesor.component';
import { AcercaDeProfesorComponent } from './acerca-de-profesor/acerca-de-profesor.component';
import { PublicacionesProfesorComponent } from './publicaciones-profesor/publicaciones-profesor.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioEstudiantesComponent } from './inicio-estudiantes/inicio-estudiantes.component';
import { AcercaDeEstudianteComponent } from './acerca-de-estudiante/acerca-de-estudiante.component';
import { PublicacionesEstudianteComponent } from './publicaciones-estudiante/publicaciones-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    InicioProfesorComponent,
    AcercaDeProfesorComponent,
    PublicacionesProfesorComponent,
    ContactanosComponent,
    InicioEstudiantesComponent,
    AcercaDeEstudianteComponent,
    PublicacionesEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
