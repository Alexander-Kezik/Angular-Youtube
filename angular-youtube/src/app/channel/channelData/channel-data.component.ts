import {Component, Input} from '@angular/core';

@Component({
  selector: 'channel-data',
  templateUrl: './channel-data.component.html',
  styleUrls: ['./channel-data.component.scss']
})
export class ChannelDataComponent {
    @Input() title: string = '';
    @Input() thumbnail: string = '';
    @Input() subscribersCount: number = 0;
}
