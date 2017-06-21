import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the AccueilPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
    selector: 'page-accueil',
    templateUrl: 'accueil.html'
})
@IonicPage()
export class AccueilPage {

    rechercherRoot = 'RechercherPage'
proposerRoot = 'ProposerPage'
TrajetsRoot = 'TrajetsPage'


constructor(public navCtrl: NavController, afAuth: AngularFireAuth) {

}

}
