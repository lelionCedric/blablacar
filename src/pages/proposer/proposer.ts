import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
/**
 * Generated class for the ProposerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-proposer',
    templateUrl: 'proposer.html',
})
export class ProposerPage {
    voyage 
    userID
    voyagesRes: FirebaseListObservable<any[]>;
    filteredItems: Array<any>;
    bdd : AngularFireDatabase;
    user: Observable<firebase.User>;

constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.bdd= db;
    this.voyage={}
    this.user = afAuth.authState
    this.user.subscribe((us)=> {
        this.userID = us.uid
    })
    
}

ionViewDidLoad() {
    console.log('ionViewDidLoad ProposerPage');
}
submitProposer(){
    console.log(this.voyage)
    this.voyagesRes = this.bdd.list('/trajets');
    var objectVoyage = this.voyagesRes.push({
        "arrive": this.voyage.villeArr,
        "chauffeur_UID": this.userID,
        "datearrive": this.voyage.dateVoy,
        "datedepart": this.voyage.dateVoy,
        "depart": this.voyage.villeDep,
        "nbplacerestante": 4,
        "peages": this.voyage.peage,
        "price": parseInt(this.voyage.prix),
        "description": this.voyage.desc,

    });
    objectVoyage.update({"trajet_id": objectVoyage.key});
}

}
