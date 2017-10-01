import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
// import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the JacFirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JacFirebaseProvider {



  constructor(public http: HttpModule, public afd: AngularFireDatabase) {
    console.log('Hello JacFirebaseProvider Provider');
    
    // console.log(firebase);
    // console.log(firebase.getToken());
 
    // this.firebase.getToken()
    // .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    // .catch(error => console.error('Error getting token', error));
  
    // this.firebase.onTokenRefresh()
    // .subscribe((token: string) => console.log(`Got a new token ${token}`));

    

  }

  getItems() {
    return this.afd.list('/jItems/');
  }
 
  addItem(name) {
    this.afd.list('/jItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/jItems/').remove(id);
  }

  
}
