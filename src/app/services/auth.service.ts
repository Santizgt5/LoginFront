import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/user.model';
import * as cryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:8080/security/users';

  constructor(private http: HttpClient) { }

  //Metodo para hacer llamado al endpoint del registrar usuario
  //Retorna la respuesta del POST
  userRegister(usuario: Usuario){
    let {id,nombre,correo,type} = usuario;
    let password = cryptoJS.SHA256(usuario.password).toString();
    console.log(password);
    return this.http.post(`${this.BASE_URL}/add`, {id,nombre,correo,password,type});
  }

  //Metodo para hacer llamado al endpoint de obtener los usuarios
  //Retorna la respuesta del GET
  getUsers() {
    return this.http.get(`${this.BASE_URL}/all`);
  }

  //Metodo para hacer llamado al endpoint del eliminar usuario
  //Retorna la respuesta del DELETE
  deleteUser( id: string ) {
    return this.http.delete(`${this.BASE_URL}/delete/${id}`);
  }

  //Metodo para hacer llamado al endpoint del editar usuario
  //Retorna la respuesta del POST
  editUser(usuario: Usuario) {
    let crypto = cryptoJS.SHA256(usuario.password).toString();
    usuario.password = crypto;
    return this.http.post(`${this.BASE_URL}/update`, usuario);
  }

  //Metodo para hacer llamado al endpoint del login
  //Retorna la respuesta del POST
  logIn(logForm:any){
    let crypto = cryptoJS.SHA256(logForm.password).toString();
    logForm.password = crypto;
    return this.http.post(`${this.BASE_URL}/login`, logForm);
  }

  //Metodo para hacer llamado al endpoint del obtener usuario por email
  //Retorna la respuesta del GET
  getUserByEmail(email:string){
    return this.http.get(`${this.BASE_URL}/email/${email}`);
  }

}
