import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginGroup: FormGroup;
	mensaje: string;

	constructor(private formbuilder: FormBuilder, 
				private autenticacionService: AutenticacionService,
				private router: Router,
				private route: ActivatedRoute) { }

	ngOnInit() {
		this.loginGroup= this.formbuilder.group({
			email:['',[Validators.required,Validators.email]],
			password:['',[Validators.required]],
			remember_me:['']
		});
	}

	validar(){
		if(this.loginGroup.invalid){
			return;
		}
		this.autenticacionService.login(this.loginGroup.controls.email.value, this.loginGroup.controls.password.value)
		.subscribe(datos=>{
			localStorage.setItem("token", datos['data'].data.token);
			this.router.navigate(['']);
			return;
		}, (err) => {
            this.mensaje="Usuario o contraseña incorrecta";
            //Connection failed message
        });
	}

}
