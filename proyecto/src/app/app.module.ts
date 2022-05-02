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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    InicioProfesorComponent,
    AcercaDeProfesorComponent,
    PublicacionesProfesorComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
