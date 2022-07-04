import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChannelService } from "./channel-services/channel.service";

@Component({
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChannelComponent {
    public channel$ = this.channelService.channel$
    public EXTENSION_FOR_CHANNEL_BANNER: string = '\=w2120-fcrop64\=1\,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj\ ';

    constructor(
        private channelService: ChannelService
    ) { }
}
