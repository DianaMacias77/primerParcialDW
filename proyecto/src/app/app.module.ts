import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/profesor/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { InicioProfesorComponent } from './components/profesor/inicio-profesor/inicio-profesor.component';
import { AcercaDeProfesorComponent } from './components/profesor/acerca-de-profesor/acerca-de-profesor.component';
import { PublicacionesProfesorComponent } from './components/profesor/publicaciones-profesor/publicaciones-profesor.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { InicioEstudiantesComponent } from './components/alumno/inicio-estudiantes/inicio-estudiantes.component';
import { AcercaDeEstudianteComponent } from './components/alumno/acerca-de-estudiante/acerca-de-estudiante.component';
import { PublicacionesEstudianteComponent } from './components/alumno/publicaciones-estudiante/publicaciones-estudiante.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarEstudiantesComponent } from './components/alumno/navbar-estudiantes/navbar-estudiantes.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

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
    AdministradorComponent,
    LoginButtonComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-5xxxigo6.us.auth0.com',
      clientId: 'rEmx9LLI3P05OOww7EUCrPSiGdf7dFVJ'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
