import { Component, OnInit } from '@angular/core';
import { TrackModel } from 'src/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg',
    album: 'Butter',
    name: 'BTS',
    duration: 230,
    url: 'https://localhost:4200/tracks.mp3',
    _id: 1,

  }
  constructor() { }

  ngOnInit(): void {
  }

}
