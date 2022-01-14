import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderUserComponent } from '@shared/header-user/header-user.component';
import { MediaPlayerComponent } from '@shared/media-player/media-player.component';
import { SideBarComponent } from '@shared/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
