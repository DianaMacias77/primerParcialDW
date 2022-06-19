import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServicioService } from '../../services/servicio.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConEstudiante } from 'src/app/modelos/con-estudiante';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss']
})
export class ContactanosComponent implements OnInit {
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
    this.servicioService.imprimirdatosE();
    this.servicioService.getdatosE().subscribe(data =>
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
    this.servicioService.createDatoE(this.ContactosForm.value).subscribe(data=>{this.datos=data;});
  }
  /* direccion(){
    this.ContactosForm.reset();
  } */

}
