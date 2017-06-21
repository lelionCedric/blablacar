import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/**
 * Generated class for the RechercherPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-rechercher',
    templateUrl: 'rechercher.html',
})
export class RechercherPage {

    voyage
    userID
    voyagesRes: FirebaseListObservable<any[]>;
    filteredItems: Array<any>;
    bdd : AngularFireDatabase;
    user: Observable<firebase.User>;
    reservationTrajet: FirebaseListObservable<any[]>;


constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.bdd= db;
    this.user.subscribe((us)=> {
        this.userID = us.uid
    });
    this.voyage={};
    console.log(this.userID);
    this.reservationTrajet = this.bdd.list('/users/'+this.userID+'/reservations');
}

ionViewDidLoad() {
    console.log('ionViewDidLoad RechercherPage');
}

submitRechercher(){
    this.voyagesRes = this.bdd.list('/trajets');
    this.voyagesRes.subscribe((voyageRes)=> {

        this.filteredItems = [];
        voyageRes.forEach(item => {
            if( item.depart== this.voyage.villeDep) {
                if( item.arrive == this.voyage.villeArr) {
                    if(item.datedepart == this.voyage.dateVoy){
                        this.filteredItems.push(item); 
                        console.log(item);
                     }
                }
            } 
        })
    });
}


    reserver(voyage: string){
        var counter = 0;
        this.reservationTrajet = this.bdd.list('/users/'+this.userID+'/reservations')
        //console.log(this.userID);
        console.log(voyage);
        this.reservationTrajet.subscribe((reserves) =>{
            reserves.forEach((reserve) => {
                counter++;
            })
        });
        this.reservationTrajet.update('trajet'+counter,{
            "idTrajetReserve" : voyage
        });
    }

}