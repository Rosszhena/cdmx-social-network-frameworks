import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';
import { AuthService } from '../../../servicios/auth.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  fotoUsuario: string;

  items: any;

  editarItem: any = {
    name: ''
  };

  constructor(private conexion: ConexionService, public authService: AuthService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
   }

  ngOnInit() {  this.authService.getAut().subscribe( auth => {
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

  eliminar(item) {
  this.conexion.eliminarItem(item);
  }

  editar(item) {
    this.editarItem = item;
  }

  agregarItemEditado() {
  this.conexion.EditarItem(this.editarItem);
  }
}

