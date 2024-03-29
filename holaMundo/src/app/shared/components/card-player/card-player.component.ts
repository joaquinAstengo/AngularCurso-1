import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from 'src/core/models/tracks.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', cover: '', duration: 0, url: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
