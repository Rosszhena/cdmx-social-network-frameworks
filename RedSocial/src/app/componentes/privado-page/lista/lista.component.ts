import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  items: any;

  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
   }

  ngOnInit() {
  }

  eliminar(item) {
  this.conexion.eliminarItem(item);
  }

}

