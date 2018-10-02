import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {RegisterPageComponent} from './componentes/register-page/register-page.component';
import {PrivadoPageComponent} from './componentes/privado-page/privado-page.component';
import { NotFoundPafeComponent } from './componentes/not-found-pafe/not-found-pafe.component';
import { AuthGuard } from './guards/auth.guard';
import { ListaComponent } from './componentes/privado-page/lista/lista.component';
import { ListaAddComponent } from './componentes/privado-page/lista-add/lista-add.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: 'lista', component: ListaComponent},
  {path: 'listaAdd', component: ListaAddComponent},
  {path: '**', component: NotFoundPafeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
