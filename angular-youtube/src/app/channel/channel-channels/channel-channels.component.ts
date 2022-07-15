import { Component } from '@angular/core';
import {ChannelService} from '../channel-services/channel.service';

@Component({
  selector: 'channel-channels',
  templateUrl: './channel-channels.component.html',
  styleUrls: ['./channel-channels.component.scss']
})

export class ChannelChannelsComponent {
    public channelMultipleChannels$ = this._channelService.getChannelMultipleChannels();

    constructor(
       private _channelService: ChannelService
    ) { }
}
