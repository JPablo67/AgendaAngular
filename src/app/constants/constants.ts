import { Usuario } from "../users/usuario";


export class Constants{
    
  static usuarios: Usuario[]=[
    new Usuario("Juan", "Acosta", "acosta.juan.0286#gmail.com", "Admin", "2023-01-15", "sin comentarios", "Admin"),
    new Usuario("Pablo", "Bareno", "pablo@example.com", "User", "2023-02-20", "primer usuario", "User"),
  ];
}