import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { blueBank } from './bluebank';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  total = 0;
  trans = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    var self = this;
    blueBank.getCustomers(function (err, data) {
      data.json().then(function (body) {
        console.log(body.results[0].id);
        blueBank.getAccounts(body.results[0].id, function (err, data) {
          data.json().then(function (body) {
            console.log(body);
            self.total = body.results[0].accountBalance;
            blueBank.getTransactions(body.results[0].id, function (err, data) {
              data.json().then(function (body) {
                console.log(body);
                self.trans = body.results;
              });
            });
          });
        });
      });
    });
  }

}
