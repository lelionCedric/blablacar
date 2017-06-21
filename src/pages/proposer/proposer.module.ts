import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProposerPage } from './proposer';

@NgModule({
  declarations: [
    ProposerPage,
  ],
  imports: [
    IonicPageModule.forChild(ProposerPage),
  ],
  exports: [
    ProposerPage
  ]
})
export class ProposerPageModule {}
