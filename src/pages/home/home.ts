import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {blueBank} from '../../../bluebank/bluebank-api.js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  labels;
  series;
  data;
  datasetOverride;
  options;

  constructor(public navCtrl: NavController) {

  }

}
