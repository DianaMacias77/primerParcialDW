import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar-estudiantes',
  templateUrl: './navbar-estudiantes.component.html',
  styleUrls: ['./navbar-estudiantes.component.scss']

})
export class NavbarEstudiantesComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
