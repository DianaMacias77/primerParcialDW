import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones-estudiante',
  templateUrl: './publicaciones-estudiante.component.html',
  styleUrls: ['./publicaciones-estudiante.component.scss'],
  template: `
                <app-root [estudiante]="valor"></app-root>
              `
})
export class PublicacionesEstudianteComponent implements OnInit {
valor = true
  constructor() { }

  ngOnInit(): void {
  }

}
