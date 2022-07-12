import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IVideo } from '../../models/IVideo.interface';
import { IComment } from '../../models/IComment.interface';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    private _API_KEY = '&key=AIzaSyDqwqGRfgRSQRXHfbTT7vrO6XMHk4gqXYM';
    private _currentVideoUrl = `${
        environment.endpoints.videos.getVideo + this._API_KEY
    }`;
    private _relatedVideosUrl = `${
        environment.endpoints.videos.getRelatedVideos + this._API_KEY
    }`;
    private _commentsUrl = `${
        environment.endpoints.commentThreads.getComments + this._API_KEY
    }`;

    constructor(private _http: HttpClient) {}

    public getCurrentVideo(id: string | null): Observable<IVideo[]> {
        return this._http
            .get<IVideo[]>(`${this._currentVideoUrl}&id=${id}`)
            .pipe(
                map((data: any) => {
                    return data.items.map((item: any) => {
                        return {
                            ...item,
                            id: item.id,
                            snippet: {
                                title: item.snippet.title,
                                description: item.snippet.description,
                                thumbnails: {
                                    high: {
                                        url: item.snippet.thumbnails.high.url,
                                    },
                                },
                                channelTitle: item.snippet.channelTitle,
                                channelId: item.snippet.channelId,
                            },
                            statistics: {
                                viewCount: item.statistics.viewCount,
                                likeCount: item.statistics.likeCount,
                                commentCount: item.statistics.commentCount,
                            },
                        } as IVideo;
                    });
                })
            );
    }

    public getRelatedVideos(): Observable<IVideo[]> {
        return this._http.get<IVideo[]>(`${this._relatedVideosUrl}`).pipe(
            map((data: any) => {
                return data.items.map((item: any) => {
                    return {
                        ...item,
                        id: item.id,
                        snippet: {
                            title: item.snippet.title,
                            description: item.snippet.description,
                            imageUrl: item.snippet.thumbnails.high.url,
                            channelTitle: item.snippet.channelTitle,
                            channelId: item.snippet.channelId,
                        },
                        statistics: {
                            viewCount: item.statistics.viewCount,
                            likeCount: item.statistics.likeCount,
                            commentCount: item.statistics.commentCount,
                        },
                    } as IVideo;
                });
            })
        );
    }

    public getComments(id: string | null): Observable<IComment[]> {
        return this._http
            .get<IComment[]>(`${this._commentsUrl}&videoId=${id}`)
            .pipe(
                map((data: any) => {
                    return data.items.map((item: any) => {
                        return {
                            id: item.snippet.topLevelComment.id,
                            snippet: {
                                authorDisplayName:
                                    item.snippet.topLevelComment.snippet
                                        .authorDisplayName,
                                authorProfileImageUrl:
                                    item.snippet.topLevelComment.snippet
                                        .authorProfileImageUrl,
                                textOriginal:
                                    item.snippet.topLevelComment.snippet
                                        .textOriginal,
                                likeCount:
                                    item.snippet.topLevelComment.snippet
                                        .likeCount,
                                publishedAt:
                                    item.snippet.topLevelComment.snippet
                                        .publishedAt,
                            },
                        } as IComment;
                    });
                })
            );
    }
}
