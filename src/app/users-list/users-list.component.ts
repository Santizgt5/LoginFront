import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  usuarios: Usuario[] = [];

  constructor(private authService: AuthService,
              private route: Router) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }


  eliminarUsuario( id:string ){
    this.authService.deleteUser(id).subscribe(resp => {
      if(resp){
        this.getUsers();
        Swal.fire({
          icon: 'success',
          title: 'Usuario eliminado',
          text: 'El usuario se ha eliminado correctamente',
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El usuario no se ha podido eliminar',
        })
      }
    })
  }

  getUsers() {
    this.usuarios = [];
    this.authService.getUsers().subscribe((resp:any) => {
      resp.forEach(user => {
        let usuario = new Usuario();
        usuario.id = user.id
        usuario.correo = user.correo;
        usuario.nombre = user.nombre;
        this.usuarios.push(usuario);
      });
    })
  }

  cerrar() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
