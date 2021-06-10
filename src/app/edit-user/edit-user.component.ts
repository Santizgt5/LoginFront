import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  usuario = new Usuario();

  constructor(private authService: AuthService,
              private route: Router,
              private activateroute: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    let correo = this.activateroute.snapshot.paramMap.get('correo');
    this.authService.getUserByEmail(correo).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.usuario.password = '';
    })
  }

  //Metodo para actualizar el usuario
  actualizarUsuario({valid, value}){
    if(!valid){
      return;
    }
    this.authService.editUser(this.usuario).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: 'Usuario editado',
        text: 'El usuario se ha editado correctamente',
      })
      this.location.back();
    });
  }

}
