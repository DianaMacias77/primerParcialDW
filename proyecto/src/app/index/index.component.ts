import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  template: `
      <app-root [estudiante]="valor"></app-root>
    `


})
export class IndexComponent implements OnInit {
valor = false;
  constructor() { }

  ngOnInit(): void {

  }

}
