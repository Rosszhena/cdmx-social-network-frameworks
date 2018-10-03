import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../../servicios/conexion.service';

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.scss']
})
export class ListaAddComponent implements OnInit {
  item: any = {
    name: ''
  };

  constructor(private servicio: ConexionService) { }

  ngOnInit() {
  }

  agregar() {
    this.servicio.agregarItem(this.item);
    this.item.name = '';
  }

}
