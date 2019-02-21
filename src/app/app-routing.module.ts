import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { AutenticacionGuard } from '../app/autenticacion/autenticacion.guard';

const routes: Routes = [
	{ path: '', component: HomeComponent, canActivate:[AutenticacionGuard] },
	{ path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
