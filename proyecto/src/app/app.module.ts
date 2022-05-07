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
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarEstudiantesComponent } from './navbar-estudiantes/navbar-estudiantes.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from '@auth0/auth0-angular';

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
    PublicacionesEstudianteComponent,
    NavbarEstudiantesComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FontAwesomeModule,
    AuthModule.forRoot({
      domain: 'dev-5xxxigo6.us.auth0.com',
      clientId: 'rEmx9LLI3P05OOww7EUCrPSiGdf7dFVJ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
