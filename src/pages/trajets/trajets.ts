import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from './my-pop-over';

@IonicPage( )
@Component({
    selector: 'page-trajets',
    templateUrl: 'trajets.html',
})
export class TrajetsPage {


    voyagesRes: FirebaseListObservable<any[]>;
    filteredItems: Array<any>;

    reservationItems: Array<any>;
    voyagesReservation: FirebaseListObservable<any[]>;

    userID
    user
    photoURL

    constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public popoverCtrl: PopoverController, public afAuth: AngularFireAuth) {
        this.user = afAuth.authState
        this.user.subscribe((us) => {
            this.userID = us.uid;
            console.log(us.uid);
            this.photoURL = us.photoURL;

            this.voyagesRes = db.list('/trajets');
            this.voyagesRes.subscribe((resultat) => {
                this.filteredItems = [];
                resultat.forEach(item => {
                    if (item.chauffeur_UID == this.userID) {
                        this.filteredItems.push(item);
                    }
                })

            })
            this.loadReservation(db, us.uid)
        })


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProposerPage');
    }

    deleteItem(key: string) {
        this.voyagesRes.remove(key);
    }

    update(item) {
        let popover = this.popoverCtrl.create(PopoverPage, item, {});
        popover.present();
    }

    loadReservation(db: AngularFireDatabase, uid: string) {
        this.voyagesReservation = db.list('/users/' + uid + '/reservations');
        //  this.voyagesReservation.subscribe(() => {});;
        console.log('/users/' + uid + '/reservations');
        this.reservationItems = [];
        this.voyagesReservation.subscribe((reservations) => {
            reservations.forEach((item) => {
                this.voyagesRes.subscribe((voyages) => {
                    voyages.forEach((voyage) => {
                        if (voyage.trajet_id == item.idTrajetReserve) {
                            this.reservationItems.push(voyage);
                        }
                    })
                })
            })
        })
    }

    annuler(voyage) {

        var reservation

        this.voyagesReservation.subscribe((reservations) => {
            reservations.forEach( (item) =>{
                if(item.idTrajetReserve == voyage.trajet_id) {
                    console.log(item)
                    reservation = item
                }
            })
        })
        this.voyagesReservation.remove(reservation.$key)
    }
}

