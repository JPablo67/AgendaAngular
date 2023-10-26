import { Injectable } from '@angular/core';
import { Usuario } from './users/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  userData: Usuario[] = [

    new Usuario("Juan", "Acosta", "ja@example.com", "Admin", "2023-01-15", "No comments", "Admin"),
    new Usuario("Pablo", "Bareno", "jp@example.com", "User", "2023-02-20", "Comments", "User"),
    


  ];

  constructor() { }


  addUser(newUser: Usuario) {
    this.userData.push(newUser);
    console.log(this.userData);
    
  }

  getUsers() {
    console.log(this.userData);
    
    return this.userData;
  }
}
