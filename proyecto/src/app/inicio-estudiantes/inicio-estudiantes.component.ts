import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-estudiantes',
  templateUrl: './inicio-estudiantes.component.html',
  styleUrls: ['./inicio-estudiantes.component.scss'],
    template: `
            <app-root [estudiante]="valor"></app-root>
          `
})
export class InicioEstudiantesComponent implements OnInit {
valor = true
  constructor() { }

  ngOnInit(): void {
  }

}

export class NgbdCarouselBasic{

}
