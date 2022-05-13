import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-profesor',
  templateUrl: './acerca-de-profesor.component.html',
  styleUrls: ['./acerca-de-profesor.component.scss'],
  template: `
          <app-root [estudiante]="valor"></app-root>
        `
})
export class AcercaDeProfesorComponent implements OnInit {
valor = false
  constructor() { }

  ngOnInit(): void {
  }

}
