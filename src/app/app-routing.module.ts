import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminGuard } from './guards/admin-guard.guard';
import { LoginComponent } from './login/login.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { RegisterComponent } from './register/register.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: UsersListComponent, canActivate: [AdminGuard]},
  {path: 'profile', component: PerfilUserComponent},
  {path: 'editUser/:correo', component: EditUserComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
