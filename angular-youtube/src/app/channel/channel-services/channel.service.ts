import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {combineLatest, from, map, mergeMap, Observable, scan, tap} from 'rxjs';

import { environment } from '../../../environments/environment';

import { IChannel } from '../../models/IChannel';
import { IPlaylist } from '../../models/IPlaylist';
import { IPlaylistItem } from '../../models/IPlaylistItem';
import { IChannelSection } from '../../models/IChannelSection';
import {IVideo} from "../../models/IVideo.interface";

@Injectable({
    providedIn: 'root'
})

export class ChannelService {
    private _channelUrl = `${environment.endpoints.channel.getChannel}`;
    private _playlistsUrl = `${environment.endpoints.playlists.getPlaylists}`;
    private _channelSectionsUrl = `${environment.endpoints.channelSections.getChannelSections}`;
    private _playlistItemsUrl = `${environment.endpoints.playlists.getPlaylistItems}`;
    private _searchingByKeyWordUrl = `${environment.endpoints.search.getVideoBySearchingByKeyword}`;
    private _videosUrl = `${environment.endpoints.videos.getVideo}`


    constructor(private _http: HttpClient) { }

    public getChannel(): Observable<IChannel> {
        return this._http.get<{ items: IChannel[] }>(`${this._channelUrl}&id=UC_x5XG1OV2P6uZZ5FSM9Ttw`)
            .pipe(
                map((item) => item.items[0])
            );
    }

    public getChannelSections(): Observable<{type: string, items: string[], title: string}[]> {
        return this._http.get<{ items: IChannelSection[] }>(`${this._channelSectionsUrl}&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw`)
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
                        default:
                            return {
                                type: 'unknown',
                                items: [],
                                title: ''
                            };
                    }
                }))
            )
    }

    public getChannelSinglePlaylists(): Observable<IPlaylist[]> {
        return this.getChannelSections()
            .pipe(
                map(value => value.filter(item => item.type === 'singleplaylist').map(item => item.items.join(''))),
                mergeMap(ids => this._http.get<{ items: IPlaylist[] }>(`${this._playlistsUrl}&id=${ids.join(',')}`)),
                map(playlist => playlist.items),
            )
    }

    public getDividedSinglePlaylists(): Observable<IPlaylist> {
        return this.getChannelSinglePlaylists()
            .pipe(
                mergeMap(playlist => playlist)
            )
    }

    public getChannelPlaylistItems(): Observable<IPlaylistItem[]> {
        return this.getDividedSinglePlaylists()
            .pipe(
                mergeMap(playlist => this._http.get<{ items: IPlaylistItem[] }>(`${this._playlistItemsUrl}&playlistId=${playlist.id}`)),
                map(playlistItem => playlistItem.items),
                scan((acc, value) => [...acc, ...value], [] as IPlaylistItem[]),
            )
    }

    public getChannelMultiplePlaylistsIds(): Observable<{type: string, items: string[], title: string}> {
        return this.getChannelSections()
            .pipe(
                map(value => value.filter(item => item.type === 'multipleplaylists')),
                mergeMap(ids => ids)
            )
    }

    public getChannelMultiplePlaylists(): Observable<{items: IPlaylist[], title: string}> {
        return  this.getChannelMultiplePlaylistsIds()
            .pipe(
                mergeMap(multiplePlaylists => this._http.get<{ items: IPlaylist[] }>(`${this._playlistsUrl}&id=${multiplePlaylists.items.join(',')}`)
                    .pipe(
                        map(playlists => ({
                            items: [...playlists.items],
                            title: multiplePlaylists.title
                        }))
                    )
                )
            )
    }


    public getChannelMultipleChannels(): Observable<IChannel[]> {
        return this.getChannelSections()
            .pipe(
                map(value => value.filter(item => item.type === 'multiplechannels').map(item => item.items.join(','))),
                mergeMap(ids => this._http.get<{ items: IChannel[] }>(`${this._channelUrl}&id=${ids}`)),
                map(channels => channels.items)
            )
    }

    public getPlaylistItemsWithPlaylist(): Observable<{playlist: IPlaylist, playlistItems: IPlaylistItem[]}[]> {
        return combineLatest<[IPlaylist[], IPlaylistItem[]]>([
            this.getChannelSinglePlaylists(),
            this.getChannelPlaylistItems()
        ])
            .pipe(
                map(([channelSinglePlaylists, channelPlaylistItems]) => channelSinglePlaylists.map(playlist => ({
                    playlist: playlist,
                    playlistItems: channelPlaylistItems.filter(item => item.snippet.playlistId === playlist.id)
                })))
            )
    }

    public getChannelVideosByKeyword(keyword: string): Observable<IVideo[]> {
        return this._http.get<{ items: [{ id: { videoId: string } }] }>(`${this._searchingByKeyWordUrl}&q=${keyword}&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw`)
            .pipe(
                mergeMap(id => this._http.get<{ items: IVideo[] }>(`${this._videosUrl}&id=${id.items.map(item => item.id.videoId).join(',')}`)),
                map(videos => videos.items)
            )
    }
}
