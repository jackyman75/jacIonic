import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
// import { Firebase } from '@ionic-native/firebase';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JacFirebaseProvider } from '../providers/jac-firebase/jac-firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJJyf0BhEaBxj9MrglBmI2hmQIvgo9Fsk",
  authDomain: "jacionic.firebaseapp.com",
  databaseURL: "https://jacionic.firebaseio.com/",
  projectId: "jacionic",
  storageBucket: "jacionic.appspot.com",
  messagingSenderId: "jac"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JacFirebaseProvider,
    AuthProvider,
    Facebook,
    AngularFireAuth
    // ,    Firebase
  ]
})
export class AppModule {}
