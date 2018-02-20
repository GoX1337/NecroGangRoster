import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

import { Fighter } from './fighter';
import { Goliath } from './goliath';
import { Escher } from './esher';

@Component({
  templateUrl: 'newGang.html'
})
export class NewGang {

  gangNameList: string[] = new Array("Goliath", "Escher");
  gangName : "";
  gangHouse : "";
  credits: number = 1000;

  fighters: Fighter[] = new Array();
  gangFighters: Fighter[] = new Array();

    constructor(
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      public admob: AdMobFree
  ) {}

  pop() {
    this.navCtrl.pop();
  }

  onSelectChange(selectedValue){
    if("Goliath" == selectedValue){
      this.fighters = new Array(Goliath.Chief, Goliath.Champion, Goliath.Ganger, Goliath.Juve);
    } 
    else if("Escher" == selectedValue){
      this.fighters = new Array(Escher.Chief, Escher.Champion, Escher.Ganger, Escher.Juve);
    }
  }

  saveGang(){
    let toast = this.toastCtrl.create({
      message: "Gang " + this.gangName + " ("+ this.gangHouse + ") is saved !",
      duration: 1000
    });
    toast.present();
  }

  addFighter(fighter){
    this.gangFighters.push(fighter);
    this.credits -= fighter.creditValue;
  }

  removeFighter(fighter, index){
    this.credits += fighter.creditValue;
    this.gangFighters.splice(index, 1);
  }

  showBanner() {
      let bannerConfig: AdMobFreeBannerConfig = {
          isTesting: true, // Remove in production
          autoShow: true,
          id: "ca-app-pub-9596813578433000/8666595149"
      };

      this.admob.banner.config(bannerConfig);

      this.admob.banner.prepare().then(() => {
          // success
      }).catch(e => console.log(e));

  }

  launchInterstitial() {
           let interstitialConfig: AdMobFreeInterstitialConfig = {
               isTesting: true, // Remove in production
               autoShow: true,
               id: "ca-app-pub-9596813578433000/2349911888"
           };
    
           this.admob.interstitial.config(interstitialConfig);
    
           this.admob.interstitial.prepare().then(() => {
               // success
           });
       }
}