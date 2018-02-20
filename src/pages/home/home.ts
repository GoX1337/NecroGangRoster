import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewGang } from '../gang/newGang';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gangList = [
   {house:"Goliath", name:"Le muscle", nbChief:1, nbChampion:2, nbGanger:7}, 
   {house:"Goliath", name:"Kheys", nbChief:1, nbGanger:3, nbJuve:8}, 
   {house:"Escher", name:"Kekettes", nbChief:1, nbChampion:1, nbGanger:4, nbJuve:2 }
  ];

  constructor(public navCtrl: NavController) {
  }

  push() {
    this.navCtrl.push(NewGang);
  }

  showGang(gang){
  }

}
