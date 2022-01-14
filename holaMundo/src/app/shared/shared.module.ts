;
import { HeaderUserComponent } from './header-user/header-user.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MediaPlayerComponent,
    HeaderUserComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
  ]
})
export class SharedModule { }
