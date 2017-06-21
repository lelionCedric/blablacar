import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RechercherPage } from './rechercher';

@NgModule({
  declarations: [
    RechercherPage,
  ],
  imports: [
    IonicPageModule.forChild(RechercherPage),
  ],
  exports: [
    RechercherPage
  ]
})
export class RechercherPageModule {}
