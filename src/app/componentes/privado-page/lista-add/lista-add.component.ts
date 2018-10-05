import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.scss']
})
export class ListaAddComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  fotoUsuario: string;

  item: any = {
    name: '',
    user: '',
    foto: ''
  };

  constructor(private servicio: ConexionService,  public authService: AuthService) { }

  ngOnInit() {
    this.authService.getAut().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
        this.isLogin = false;
      }
    });
  }

  agregar() {
    this.item.user = this.nombreUsuario;
    this.item.foto = this.fotoUsuario;
    this.servicio.agregarItem(this.item);
    console.log(this.item );
    this.item.name = '';
  }

}
