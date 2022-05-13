import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-estudiante',
  templateUrl: './acerca-de-estudiante.component.html',
  styleUrls: ['./acerca-de-estudiante.component.scss'],
  template: `
        <app-root [estudiante]="valor"></app-root>
      `
})
export class AcercaDeEstudianteComponent implements OnInit {
valor = true
  constructor() { }

  ngOnInit(): void {
  }

}
