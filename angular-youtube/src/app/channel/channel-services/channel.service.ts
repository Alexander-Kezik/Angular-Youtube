import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, map, mergeMap, Observable, scan } from 'rxjs';

import { IChannel } from '../../models/IChannel';
import { IPlaylist } from '../../models/IPlaylist';
import { environment } from '../../../environments/environment';
import { IPlaylistItem } from '../../models/IPlaylistItem';
import { IChannelSection } from '../../models/IChannelSection';

@Injectable({
    providedIn: 'root'
})

export class ChannelService {
    private _API_KEY = '&key=AIzaSyDSwg-YAVxd3v5t-bNisk-GH5XLnZxI8zM';
    private _channelUrl = `${environment.endpoints.channel.getChannel + this._API_KEY}`;
    // private _playlistsUrl = `${environment.endpoints.playlists.getPlaylists + this._API_KEY}`;
    private _channelSectionsUrl=`https://www.googleapis.com/youtube/v3/channelSections?channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&part=snippet,contentDetails${this._API_KEY}`


    constructor(private http: HttpClient) { }

    public channel$: Observable<IChannel> = this.http.get<{ items: IChannel[] }>(this._channelUrl).pipe(
        map((item) => item.items[0])
    )

    public channelSections$: Observable<{type: string, items: string[], title: string}[]> = this.http.get<{ items: IChannelSection[] }>(this._channelSectionsUrl)
        .pipe(
            map(section => section.items.map(item => {
                switch (item.snippet.type) {
                    case 'singleplaylist':
                        return {
                            type: 'singleplaylist',
                            items: item.contentDetails.playlists,
                            title: ''
                        }
                    case 'multipleplaylists':
                        return {
                            type: 'multipleplaylists',
                            items: item.contentDetails.playlists,
                            title: item.snippet.title
                        }
                    case 'multiplechannels':
                        return {
                            type: 'multiplechannels',
                            items: item.contentDetails.channels,
                            title: item.snippet.title
                        }
                    default: return {
                        type: 'unknown',
                        items: [],
                        title: ''
                    };
                }
            }))
        )

    public channelSinglePlaylists$: Observable<IPlaylist[]> = this.channelSections$
        .pipe(
            map(value => value.filter(item => item.type === 'singleplaylist').map(item => item.items.join(''))),
            mergeMap(ids => this.http.get<{ items: IPlaylist[] }>(`https://www.googleapis.com/youtube/v3/playlists?maxResults=10&part=snippet,contentDetails&id=${ids.join(',') + this._API_KEY}`)),
            map(playlist => playlist.items),
        )

    public dividedSinglePlaylists$: Observable<IPlaylist> = this.channelSinglePlaylists$
        .pipe(
            mergeMap(playlist => playlist)
        )

    public channelPlaylistItems$: Observable<IPlaylistItem[]> = this.dividedSinglePlaylists$
        .pipe(
            mergeMap(playlist => this.http.get<{ items: IPlaylistItem[] }>(`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyDSwg-YAVxd3v5t-bNisk-GH5XLnZxI8zM&part=contentDetails,snippet&playlistId=${playlist.id}`)),
            map(playlistItem => playlistItem.items),
            scan((acc, value) => [...acc, ...value], [] as IPlaylistItem[]),
        )

    public channelMultiplePlaylistsIds$: Observable<{type: string, items: string[], title: string}> = this.channelSections$
        .pipe(
            map(value => value.filter(item => item.type === 'multipleplaylists')),
            mergeMap(ids => ids)
        )

    public channelMultiplePlaylists$: Observable<{items: IPlaylist[], title: string}> = this.channelMultiplePlaylistsIds$
        .pipe(
            mergeMap(multiplePlaylists => this.http.get<{ items: IPlaylist[] }>(`https://www.googleapis.com/youtube/v3/playlists?maxResults=10&part=snippet,contentDetails&id=${multiplePlaylists.items.join(',') + this._API_KEY}`)
                .pipe(
                    map(playlists => ({
                        items: [...playlists.items],
                        title: multiplePlaylists.title
                    }))
                )
            )
        )

    public channelMultipleChannels$: Observable<IChannel[]> = this.channelSections$
        .pipe(
            map(value => value.filter(item => item.type === 'multiplechannels').map(item => item.items.join(','))),
            mergeMap(ids => this.http.get<{ items: IChannel[] }>(`https://www.googleapis.com/youtube/v3/channels?&part=snippet,brandingSettings,statistics&id=${ids + this._API_KEY}`)),
            map(channels => channels.items)
        )

    public playlistItemsWithPlaylist$: Observable<{playlist: IPlaylist, playlistItems: IPlaylistItem[]}[]> = combineLatest<[IPlaylist[], IPlaylistItem[]]>([
        this.channelSinglePlaylists$,
        this.channelPlaylistItems$
    ])
        .pipe(
            map(([channelSinglePlaylists, channelPlaylistItems]) => channelSinglePlaylists.map(playlist => ({
                playlist: playlist,
                playlistItems: channelPlaylistItems.filter(item => item.snippet.playlistId === playlist.id)
            })))
        )
}
