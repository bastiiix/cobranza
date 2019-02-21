import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environments } from '../conexion/conexion-service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

	headers:HttpHeaders;

  constructor(private http: HttpClient) {
  	this.headers=new HttpHeaders({"Content-Type": "application/json", "Accept": "application/json"})
  }

  public getToken(){
  	return localStorage.getItem("token");
  }

  login(correo, clave){
  	return this.http.post(Environments.ENDPOINT+"/login",{email:correo,password:clave},{headers:this.headers}).pipe(map(datos=>{return datos}));
  }
}
