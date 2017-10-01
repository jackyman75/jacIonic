import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JacFirebaseProvider} from '../../providers/jac-firebase/jac-firebase';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jItems : FirebaseListObservable<any[]>;
  newItem = '';
  constructor(public navCtrl: NavController, public jacFirebase: JacFirebaseProvider) {
    this.jItems = this.jacFirebase.getItems();
  }

  addItem() {
    this.jacFirebase.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.jacFirebase.removeItem(id);
  }
}
