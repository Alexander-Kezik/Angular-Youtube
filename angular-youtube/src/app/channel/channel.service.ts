import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IChannel} from "./channel";
import {map} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ChannelService {
    private channelURL = 'https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDSwg-YAVxd3v5t-bNisk-GH5XLnZxI8zM&part=snippet,brandingSettings,statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw';

    constructor(private http: HttpClient) { }

    channel$ = this.http.get<IChannel>(this.channelURL)
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
