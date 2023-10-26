import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent {

  usuarios:Usuario[]=Constants.usuarios

  editUser(user: Usuario) {
    // Implement edit logic here
  }

  deleteUser(user: Usuario) {
    // Implement delete logic here
  }

}
