import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChannelService } from '../channel-services/channel.service';

@Component({
    selector: 'channel-about',
    templateUrl: './channel-about.component.html',
    styleUrls: ['./channel-about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChannelAboutComponent {
    public channel$ = this._channelService.getChannel();

    constructor(
        private _channelService: ChannelService
    ) { }

}
