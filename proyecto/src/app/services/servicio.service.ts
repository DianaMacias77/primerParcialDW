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
    this.http.get('http://localhost:8002/api/estudiante').subscribe(data =>
      console.log(data))
  }
  getdatos():Observable<any>{
     return this.http.get('http://localhost:8002/api/estudiante');
  }
  createDato(dato:any):Observable<any>{
    return this.http.post('http://localhost:8002/api/estudiante',dato);
  }
  editartDato(dato:any):Observable<any>{
    return this.http.put('http://localhost:8002/api/estudiante',dato);
  }
  deleteDato(id:string):Observable<any>{
    return this.http.delete('http://localhost:8002/api/estudiante'+id);
  }
  getDato(id:string):Observable<any>{
    return this.http.get('http://localhost:8002/api/estudiante'+id);
  }
}
