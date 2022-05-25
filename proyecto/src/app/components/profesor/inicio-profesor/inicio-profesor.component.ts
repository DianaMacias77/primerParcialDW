import { Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.component.html',
  styleUrls: ['./inicio-profesor.component.scss'],
})
export class InicioProfesorComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  direccion(){
    this.router.navigateByUrl('/profesor/publicaciones-profesor');
  }

}
