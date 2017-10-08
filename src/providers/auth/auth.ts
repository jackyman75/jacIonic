import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  displayName;
  public nameOb = new Subject<string>();
   
  constructor(private afAuth: AngularFireAuth,
    private facebook: Facebook,
    private platform: Platform) { 
      this.displayName = new Subject<String>();
      afAuth.authState.subscribe((user: firebase.User) => {
        if (!user) {
            this.displayName = null;
            this.nameOb.next("Anonymous");
            return;
        }
        this.displayName = user.displayName; 
        this.nameOb.next(user.displayName);
        console.log("displayname: " + this.displayName);
    });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
        return this.facebook.login(['email', 'public_profile']).then(res => {
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);

            return firebase.auth().signInWithCredential(facebookCredential);
        })
    }
    else {
        return this.afAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(res => console.log(res));
    }
}

signOut() {
  this.afAuth.auth.signOut();
  this.facebook.logout();
}

}
