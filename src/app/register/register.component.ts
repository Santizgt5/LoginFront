import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form;
  usuario = new Usuario();
  confirmPassword = '';
  

  constructor(  private authService: AuthService,
                private route: Router ) {
      this.usuario.correo = '';
      this.usuario.nombre = '';
      this.usuario.password = '';
      this.usuario.type = 1;
   }

  ngOnInit( ): void {
  }


  registerUser({valid, value}){
    console.log(valid);
    console.log(value);
    if(!valid){
      return;
    }
    if(this.usuario.password != this.confirmPassword){
      return;
    }
    this.authService.userRegister(this.usuario).subscribe(resp => {
      console.log(resp);
    });
  }

}
