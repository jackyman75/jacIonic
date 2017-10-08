import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JacFirebaseProvider} from '../../providers/jac-firebase/jac-firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  jItems : FirebaseListObservable<any[]>;
  newItem = '';
  displayName : string;
  constructor(public navCtrl: NavController, public jacFirebase: JacFirebaseProvider, public authProvider: AuthProvider) {
    this.jItems = this.jacFirebase.getItems();
    this.authProvider.nameOb.subscribe(value => {this.displayName=value; this.jItems = this.jacFirebase.getItems();});
  }

  addItem() {
    this.jacFirebase.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.jacFirebase.removeItem(id);
  }


  loginFacebook() {
    this.authProvider.signInWithFacebook();
  }
  logout() {
    this.authProvider.signOut();
  }
}
