import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TopInfoContentComponent } from '../app/theme/components/top-info-content/top-info-content.component';
import { SidenavComponent } from '../app/theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from '../app/theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from '../app/theme/components/menu/horizontal-menu/horizontal-menu.component';
import { FlagsMenuComponent } from '../app/theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from '../app/theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from '../app/theme/components/applications/applications.component';
import { MessagesComponent } from '../app/theme/components/messages/messages.component';
import { UserMenuComponent } from '../app/theme/components/user-menu/user-menu.component';
import { FavoritesComponent } from '../app/theme/components/favorites/favorites.component';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';

@NgModule({
  declarations: [
    AppComponent,
    TopInfoContentComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FavoritesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [AppSettings],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
