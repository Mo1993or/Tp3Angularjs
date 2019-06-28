import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProfilComponent } from './component/profil/profil.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { MeteoComponent } from './component/meteo/meteo.component';
import { ListeMeteoComponent } from './component/liste-meteo/liste-meteo.component';
import { AuthguardGuard } from './authgard.guard';

const routes: Routes = [
{path: "home", component: HomeComponent},
{path: "header", component: HeaderComponent},
{path: "profil", component: ProfilComponent},
{path: "login", component: LoginComponent},
{path: "meteo/:name", component: MeteoComponent},
{path: "listeMeteo", component: ListeMeteoComponent,canActivate:[AuthguardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
