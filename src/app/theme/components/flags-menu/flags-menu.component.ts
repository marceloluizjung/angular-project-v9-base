import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-flags-menu',
  templateUrl: './flags-menu.component.html',
  styleUrls: ['./flags-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlagsMenuComponent implements OnInit {

  public settings: Settings;
  constructor(public appSettings:AppSettings){
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {
  }

}
