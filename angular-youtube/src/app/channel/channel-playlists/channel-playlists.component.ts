import { Component } from '@angular/core';

import { ChannelService } from '../channel-services/channel.service';
import { IPlaylist } from '../../models/IPlaylist';

@Component({
  selector: 'channel-playlists',
  templateUrl: './channel-playlists.component.html',
  styleUrls: ['./channel-playlists.component.scss']
})

export class ChannelPlaylistsComponent {
    public channelMultiplePlaylists: { items: IPlaylist[], title: string }[] = [];
    public channelMultiplePlaylists$ = this._channelService.channelMultiplePlaylists$.subscribe(playlists => {
        this.channelMultiplePlaylists = [...this.channelMultiplePlaylists, playlists]
    });
    public playlistItemsWithPlaylist$ = this._channelService.playlistItemsWithPlaylist$;

    constructor(
        private _channelService: ChannelService
    ) { }
}
