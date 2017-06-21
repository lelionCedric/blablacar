import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccueilPage } from '../accueil/accueil';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';

@Component({
    selector: 'app-root',
    templateUrl: 'home.html'
})
export class HomePage {
    accueil = AccueilPage;
user: Observable<firebase.User>;
voyages: FirebaseListObservable<any[]>;
users: FirebaseListObservable<any[]>;


constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public navController : NavController) {
    //this.user = afAuth.authState;
    this.users = db.list('/users');
}
public login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((succes)=>{
        console.log(succes);
        this.user = this.afAuth.authState;
        this.user.subscribe((user) => {
            var isExist = 0
            //Vérification de l'existence du user
            this.users.subscribe((users) => {
                users.forEach(u => {
                    if(u.email == user.email ){
                        isExist=1
                    }
                })
            });
            if(isExist==0){
                this.users.update(user.uid, {
                    "name" : user.displayName,
                    "email" : user.email})
            
            };
        });
        
        this.navController.push(this.accueil);
    });                                                               
}
}