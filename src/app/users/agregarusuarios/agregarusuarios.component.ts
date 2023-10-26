import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsersService } from 'src/app/users.service';


@Component({
  selector: 'app-agregarusuarios',
  templateUrl: './agregarusuarios.component.html',
  styleUrls: ['./agregarusuarios.component.css']
})
export class AgregarusuariosComponent {

  

  usuario :Usuario = {
    nombre: '',
    apellidos: '',
    email: '',
	  tipoUsuario: '',
	  fechaCreacion: '',
	  observaciones:'',
  }

  constructor(private userDataService: UsersService) {
    
  }

  agregarUsuario(){
    this.userDataService.addUser(this.usuario);
    
    
  }

}
