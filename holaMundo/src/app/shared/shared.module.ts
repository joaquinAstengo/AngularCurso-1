;
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaPlayerComponent,
    HeaderUserComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
