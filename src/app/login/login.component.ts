import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;
  login = {
    correo: '',
    password: ''
  };

  constructor( private authService: AuthService,
              private route: Router) {

  }

  ngOnInit(): void {
  }

  //Metodo para iniciar sesion en el front
  logIn({valid, value}) {
    if(!valid){
      return
    }
    this.authService.logIn(this.login).subscribe(resp => {
      console.log(resp);
      if(resp){
        this.authService.getUserByEmail(this.login.correo).subscribe((resp1:any) => {
          localStorage.setItem('usuario', JSON.stringify(resp1));
          if(resp1.type == "ADMIN"){
            this.route.navigateByUrl('/users');
          } else {
            const hoy = new Date();
            const fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-'+ hoy.getFullYear()+ ' : ' + hoy.getHours() + ":" + hoy.getMinutes();
            localStorage.setItem('hora', JSON.stringify(fecha));
            this.route.navigateByUrl('/profile'); 
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: 'Verifique los campos',
        })
      }
    })

  }

}
