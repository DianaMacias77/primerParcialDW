import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.component.html',
  styleUrls: ['./inicio-profesor.component.scss'],
  template: `
  <app-root [estudiante]="valor"></app-root>
  `
})
export class InicioProfesorComponent implements OnInit {
  @Input() valor:any;
  sub
  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router) {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.valor = params.get(this.valor);
    });
  }

  ngOnInit(): void {
  }

}
