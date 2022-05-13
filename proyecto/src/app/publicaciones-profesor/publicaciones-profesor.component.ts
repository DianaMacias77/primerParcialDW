import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones-profesor',
  templateUrl: './publicaciones-profesor.component.html',
  styleUrls: ['./publicaciones-profesor.component.scss'],
    template: `
    <app-root [estudiante]="valor"></app-root>
    `
})
export class PublicacionesProfesorComponent implements OnInit {
valor = false
  constructor() { }

  ngOnInit(): void {
  }

}
