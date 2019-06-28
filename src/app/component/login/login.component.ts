import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { FormBuilder,FormControl } from '@angular/forms';
import { MeteoService } from 'src/app/services/meteo.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent implements OnInit {
  
titre='Titre';
message: string;
loginu="";
  password="";

Er=''

changertitre(value:string){
  this.titre=value;
}


 
constructor(public authService: AuthService, public router: Router) {
  this.setMessage();
}

setMessage() {
  this.message = ''+ (this.authService.isLoggedIn ? 'Connexion' : 'Aucune connexion');
}

login() {
  if(this.loginu === "smb" && this.password === "123"){
  this.message = 'Connexion en cours ...';
 
  this.authService.login().subscribe(() => {
    this.setMessage();
    if (this.authService.isLoggedIn) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/listeMeteo';

      // Redirect the user
      this.router.navigateByUrl(redirect);
    }
    
  }
  );

 
}else{
  this.message='erreur de connexion';
}


}

logout() {
  this.authService.logout();
  this.setMessage();
}
  
  
  
 
  
   

  
  ngOnInit() {
    
  }
  
}


