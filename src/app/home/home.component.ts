import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { EmpresasServiceService } from '../services/empresas-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	empresa: string;
	idEmpresa: string;

  constructor(private autenticacionService: AutenticacionService,
			  private router: Router,
			  private empresasService: EmpresasServiceService,) { }

  ngOnInit() {
  	this.verificarEmpresa();
  }

  verificarEmpresa(){
  	this.empresasService.obtenerEmpresaDefault();
  	this.empresa = localStorage.getItem("nomEmpresa");
  	this.idEmpresa = localStorage.getItem("idEmpresa");
  }

  logOut(){
  	localStorage.clear();
  	this.router.navigate(['login']);
  }

}
