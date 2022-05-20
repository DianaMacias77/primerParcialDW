import { Component,OnInit,EventEmitter,Output} from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';

declare const Buffer;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']

})
export class IndexComponent implements OnInit {
  eleccion:string = '';
  options:any= [
    'Profesor',
    'Alumno'
  ];
  handlerControl(event:any){
    this.eleccion=event.target.value;

  }
  @Output() pasarValor = new EventEmitter<string>();
  constructor(private router: Router){}

  ngOnInit(): void {

  }
  changeP(){
    console.log(this.eleccion)
    if(this.eleccion=="Profesor"){
      this.pasarValor.emit(this.eleccion);
      this.router.navigateByUrl('/inicio-profesor');
    }
    if( this.eleccion=="Alumno"){
      this.pasarValor.emit(this.eleccion);
      this.router.navigateByUrl('/inicio-estudiante');
    }
  }




}
