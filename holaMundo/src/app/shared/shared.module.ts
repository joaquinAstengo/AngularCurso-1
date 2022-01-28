;
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaPlayerComponent,
    HeaderUserComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
