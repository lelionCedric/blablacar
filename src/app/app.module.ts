import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccueilPage } from '../pages/accueil/accueil';
import { PopoverPage } from '../pages/trajets/my-pop-over';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        AccueilPage, 
        PopoverPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(environment.firebase, "applIonic" ),
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        AccueilPage,
        PopoverPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
