export class Usuario {
    
	nombre: string;
    apellidos: string;
    email: string;
	tipoUsuario: string;
	fechaCreacion: string;
	observaciones:string;

	constructor(nombre: string,apellidos: string,email: string,
		tipoUsuario: string,fechaCreacion: string,observaciones:string, userType:string){
	this.nombre=  nombre;
	this.apellidos= apellidos;
    this.email= email;
    this.tipoUsuario= tipoUsuario;
	this.fechaCreacion= fechaCreacion;
	this.observaciones= observaciones;

	}
}
