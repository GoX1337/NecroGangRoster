import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewGang } from '../gang/newGang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  push() {
    this.navCtrl.push(NewGang);
  }

  showGang(gang){

  }

}
