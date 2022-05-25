import { Component,OnInit,EventEmitter,Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']

})
export class IndexComponent implements OnInit {
  eleccion:string = '';
  opciones:any= [
    'Profesor',
    'Alumno'
  ];
  obtenValor(event:any){
    this.eleccion=event.target.value;

  }
  @Output() pasarValor = new EventEmitter<string>();
  constructor(private router: Router){}

  ngOnInit(): void {

  }
  dirigiraMenu(){
    console.log(this.eleccion)
    if(this.eleccion=="Profesor"){
      this.pasarValor.emit(this.eleccion);
      this.router.navigateByUrl('/profesor');
    }
    if( this.eleccion=="Alumno"){
      this.pasarValor.emit(this.eleccion);
      this.router.navigateByUrl('/alumno');
    }
  }




}
