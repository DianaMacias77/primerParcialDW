import { ServiceService } from './service.service';
import { Component, Output,EventEmitter
} from '@angular/core';
import {
  query,
  style,
  animate,
  transition,
  animateChild,
  group
} from '@angular/animations';
import { ChildrenOutletContexts } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*animations: [
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ]),
    ]),
    transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ left: '-100%' })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' }))
      ]),
      query('@*', animateChild())
    ]),
  ])
]*/
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

