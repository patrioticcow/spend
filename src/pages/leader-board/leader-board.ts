import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-leader-board',
  templateUrl: 'leader-board.html'
})
export class LeaderBoardPage {

  constructor(public navCtrl: NavController) {
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }
}
