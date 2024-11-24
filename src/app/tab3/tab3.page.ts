import {Component, OnInit} from '@angular/core';
import {Browser} from "@capacitor/browser";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor() {}

  async ngOnInit() {
    await Browser.open({'url': 'https://capacitor.ionicframework.com/'});
  }
}
