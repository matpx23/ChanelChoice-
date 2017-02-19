import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalNotifications } from 'ionic-native';

declare var io: any;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  socket: any
  chat_input: string;
  sanitizer: any;
  chats = [];
  static get parameters() {
    return [NavController,DomSanitizer];
  }
  constructor(public navCtrl: NavController, sanitizer) {
    this.sanitizer = sanitizer;
    this.chats = [];
    this.socket = io('http://channelchoice.azurewebsites.net');
    this.socket.on('update', (msg) => {
      this.chats.push(msg);
      console.log('note recived');
      LocalNotifications.schedule({
        id: 1,
        text: 'Single ILocalNotification',
        sound: 'file://beep.caf'
      });
    });
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
