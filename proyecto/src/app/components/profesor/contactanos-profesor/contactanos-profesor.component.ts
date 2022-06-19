import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServicioService } from './../../../services/servicio.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactanos-profesor',
  templateUrl: './contactanos-profesor.component.html',
  styleUrls: ['./contactanos-profesor.component.scss']
})
export class ContactanosProfesorComponent implements OnInit {
  ContactosForm=new FormGroup({
    nombre:new FormControl(''),
    apellido:new FormControl(''),
    email:new FormControl(''),
    telefono:new FormControl(''),
    mensaje:new FormControl('')

  })
  datos:any;
  constructor(private router: Router,public servicioService:ServicioService) { }

  ngOnInit(): void {
    this.servicioService.imprimirdatos();
    this.servicioService.getdatosP().subscribe(data =>
      {this.datos=data;},(err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("problema del cliente")
        }
        else{
          console.log("problema del servidor")
        }
      }
      );
  }
  submit(){
    console.warn(this.ContactosForm.value);
    this.servicioService.createDatoP(this.ContactosForm.value).subscribe(data=>{this.datos=data;});
  }
  /* direccion(){
    this.ContactosForm.reset();
  } */

}
