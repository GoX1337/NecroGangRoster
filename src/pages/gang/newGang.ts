import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

import { Fighter, FighterType } from './fighter';
import { Goliath } from './goliath';
import { Escher } from './esher';

const maxNbChief = 1;
const maxNbChampion = 3;

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

  nbChampion : number = 0;
  nbChief : number = 0;
  nbGanger : number = 0;
  nbNotGanger : number = 0;

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
    if(this.nbGanger >= this.nbNotGanger){
      this.showToaster("Gang " + this.gangName + " ("+ this.gangHouse + ") is saved !");
    }
  }

  showToaster(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  isFighterMaxReached(fighter){
      return (fighter.type == FighterType.CHIEF && this.nbChief == maxNbChief) 
          || (fighter.type == FighterType.CHAMPION && this.nbChampion == maxNbChampion);
  }

  addFighter(fighter){

    if(fighter.type == FighterType.CHIEF)
    {
      this.nbChief++;
      this.nbNotGanger++;
      console.log("chief");
    } 
    else if(fighter.type == FighterType.CHAMPION)
    {
      this.nbChampion++;
      this.nbNotGanger++;
      console.log("champion");
    }
    if(fighter.type == FighterType.GANGER)
    {
      this.nbGanger++;
      console.log("gang");
    } 
    else if(fighter.type == FighterType.JUVE)
    {
      this.nbNotGanger++;
      console.log("juve");
    }
    
    if(this.credits >= fighter.creditValue){
      this.credits -= fighter.creditValue;
      this.gangFighters.push(fighter);
    } 
    else {
      this.showToaster("Not enough credit !");
    }
  }

  removeFighter(fighter, index){

    if(fighter.type == FighterType.CHIEF)
    {
      this.nbChief--;
    } 
    else if(fighter.type == FighterType.CHAMPION)
    {
      this.nbChampion--
    }
    if(fighter.type == FighterType.GANGER)
    {
      this.nbGanger--
    } 
    else 
    {
      this.nbNotGanger--
    }

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