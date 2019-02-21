import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environments } from '../conexion/conexion-service';

@Injectable({
  providedIn: 'root'
})
export class EmpresasServiceService {

  constructor(private http: HttpClient) { }

	public obtenerEmpresaDefault() {
		this.http.get(Environments.ENDPOINT+"/empresas/dafault")
		.subscribe(data =>{
			localStorage.setItem("idEmpresa", data['data'].idEmpresa);
			localStorage.setItem("nomEmpresa", data['data'].nomEmpresa);
			console.log(JSON.stringify(data['data']));
		}, (err) => {
			console.log(err);
		    //Connection failed message
		});
	}
}
