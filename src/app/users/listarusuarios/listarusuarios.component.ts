import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit{

  

  usuarios:Usuario[]=[]

  constructor(private userDataService: UsersService) {
  }

  ngOnInit(): void {
      this.usuarios=this.userDataService.getUsers()
  }


  editUser(user: Usuario) {
    // Implement edit logic here
  }

  deleteUser(user: Usuario) {
    // Implement delete logic here
  }

}
