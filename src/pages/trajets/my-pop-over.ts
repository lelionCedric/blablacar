import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  template: `
    <form (ngSubmit)="updateVoyage()">
        <ion-list>
            <ion-item>
                <ion-label >Ville départ</ion-label>
                <ion-input type="text" value="" [(ngModel)]="voyage.depart" name="villeDep"></ion-input>
            </ion-item>

            <ion-item>
                <ion-label fixed>Ville d'arrivée</ion-label>
                <ion-input type="text" [(ngModel)]="voyage.arrive" name="villeArr"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label>Description</ion-label>
                <ion-textarea placeholder="Je part d'ici pour aller là-bas. Viendez." [(ngModel)]="voyage.description" name="desc"></ion-textarea>
            </ion-item>

            <ion-item>
                <ion-label>Date du voyage </ion-label>
                <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="DD/MM/YYYY" max = "2031-12-24" [(ngModel)]="voyage.datedepart" name="dateVoy"></ion-datetime>    
            </ion-item>

            <ion-item>
                <ion-label>Peage(s)</ion-label>
                <ion-checkbox [(ngModel)]="voyage.peages" name="peage"></ion-checkbox>
            </ion-item>
            <ion-item>
                <ion-label fixed>Prix</ion-label>
                <ion-input type="number" value="" [(ngModel)]="voyageU.price" name="prix" min=1>
                </ion-input>
                <ion-label>€</ion-label>
            </ion-item>
            <ion-item>
                <ion-card-content>
                    <button ion-button item-center (click)="close()">close</button>
                </ion-card-content>
            </ion-item>

        </ion-list>
    </form>
  `
})
export class PopoverPage {
    voyage;
    voyageU;
  constructor(public viewCtrl: ViewController) {
      this.voyage = viewCtrl.data;
      console.log(this.voyage);
      this.voyageU = {};
  }     
    updateVoyage(){
        
    }
  close() {
    this.viewCtrl.dismiss();
  }
}