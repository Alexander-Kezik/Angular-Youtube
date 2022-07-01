import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IChannel } from '../../models/IChannel';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ChannelService {
    private _API_KEY = '&key=AIzaSyDSwg-YAVxd3v5t-bNisk-GH5XLnZxI8zM';
    private _channelUrl = `${environment.endpoints.channel.getChannel + this._API_KEY}`;

    constructor(private http: HttpClient) { }

    public channel$ = this.http.get<IChannel>(this._channelUrl)
        .pipe(
            map(channel => ({
                ...channel,
                title: channel.items[0].snippet.title,
                thumbnail: channel.items[0].snippet.thumbnails.default.url,
                subscribersCount: channel.items[0].statistics.subscriberCount,
                banner: channel.items[0].brandingSettings.image.bannerExternalUrl
            }))
        )
}
