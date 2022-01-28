import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg',
    album: 'Butter',
    name: 'BTS'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
