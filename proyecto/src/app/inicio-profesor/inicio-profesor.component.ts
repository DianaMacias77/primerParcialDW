import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.component.html',
  styleUrls: ['./inicio-profesor.component.scss'],
  template: `
  <app-root [estudiante]="valor"></app-root>
  `
})
export class InicioProfesorComponent implements OnInit {
valor = false;
  constructor() { }

  ngOnInit(): void {
  }

}
