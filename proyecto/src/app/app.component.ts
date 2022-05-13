import { Component,HostBinding,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
template: `
Message from parent:
  `
})
export class AppComponent {
title = 'proyecto';
@Input() estudiante: boolean;
showNav():boolean{
if(this.estudiante==false){
return true;
}
else{
return false;
}
}
showNavE():boolean{
if(this.estudiante==false){
return false;
}
else{
return true;
}
}
   constructor() {}
}
