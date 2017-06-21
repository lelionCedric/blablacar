import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccueilPage } from './accueil';
import { RechercherPage } from '../rechercher/rechercher';
import { TrajetsPage } from '../trajets/trajets';
import { ProposerPage } from '../proposer/proposer';


@NgModule({
  declarations: [
    AccueilPage,
    RechercherPage,
    ProposerPage,
    TrajetsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccueilPage),
  ]
})
export class AccueilPageModule {}
