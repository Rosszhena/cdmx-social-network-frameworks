import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.css']
})
export class PrivadoPageComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
   }

  ngOnInit() {
  }

}


