import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChannelService } from './channel.service';

@Component({
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChannelComponent {
    EXTENSION_FOR_BANNER: string = '\=w2120-fcrop64\=1\,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj\ ';

    constructor(
        private channelService: ChannelService
    ) { }

    channel$ = this.channelService.channel$
}
