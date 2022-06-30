import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs';
import {IChannel} from "./channel";

@Injectable({
    providedIn: 'root'
})

export class ChannelService {
    private channelUrl = 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDSwg-YAVxd3v5t-bNisk-GH5XLnZxI8zM&part=snippet,brandingSettings,statistics&id=UCXlhVxzpYqr2WguSWbzRNMw';

    constructor (private http: HttpClient) { }

    channel$ = this.http.get<IChannel>(this.channelUrl)
        .pipe(
            map(channel => ({
                ...channel,
                title: channel.items[0].snippet.title,
                subscribersCount: channel.items[0].statistics.subscriberCount,
                thumbnail: channel.items[0].snippet.thumbnails.default.url,
                banner: channel.items[0].brandingSettings.image.bannerExternalUrl
            }))
        )

}
