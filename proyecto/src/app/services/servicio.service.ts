import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) {
    this.http.get('http://localhost:8002/api/')
  }
  imprimirdatos(){
    this.http.get('http://localhost:8002/api/conestudiante').subscribe(data =>
      console.log(data))
  }
  getdatosE():Observable<any>{
     return this.http.get('http://localhost:8002/api/conestudiante');
  }
  createDatoE(dato:any):Observable<any>{
    return this.http.post('http://localhost:8002/api/conestudiante',dato);
  }
  editartDatoE(dato:any):Observable<any>{
    return this.http.put('http://localhost:8002/api/conestudiante',dato);
  }
  deleteDatoE(id:string):Observable<any>{
    return this.http.delete('http://localhost:8002/api/conestudiante'+id);
  }
  getDatoE(id:string):Observable<any>{
    return this.http.get('http://localhost:8002/api/conestudiante'+id);
  }
  getDatoP(id:string):Observable<any>{
    return this.http.get('http://localhost:8002/api/conprofesor'+id);
  }
  getdatosP():Observable<any>{
    return this.http.get('http://localhost:8002/api/conprofesor');
 }
 createDatoP(dato:any):Observable<any>{
   return this.http.post('http://localhost:8002/api/conprofesor',dato);
 }
 editartDatoP(dato:any):Observable<any>{
   return this.http.put('http://localhost:8002/api/conprofesor',dato);
 }
 deleteDatoP(id:string):Observable<any>{
   return this.http.delete('http://localhost:8002/api/conprofesor'+id);
 }
}
