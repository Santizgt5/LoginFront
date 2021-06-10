import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/user.model';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.scss']
})
export class PerfilUserComponent implements OnInit {

  fecha: string;
  user: any;


  constructor( private route: Router ) { 
    this.fecha = localStorage.getItem('hora');
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit(): void {
  }


  //Metodo para actualizar cerrar sesión
  cerrar() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
