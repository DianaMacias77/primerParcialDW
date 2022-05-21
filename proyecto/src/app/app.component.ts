import { ServiceService } from './services/service.service';
import { Component} from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
title = 'proyecto';
profesor="hola";
alumno=false;

  addItem(newItem: string) {
    this.service.valores=this.profesor;
    this.profesor.valueOf();
    this.alumno.valueOf();
  }
  visible():boolean{
    if (false==false){
      return true;
    }
    else{
      return false;
    }
  }
  visibleE():boolean{
    if (false==false){
      return false;
    }
    else{
      return true;
    }
  }

constructor(private contexts: ChildrenOutletContexts,public service:ServiceService) {}
getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}

