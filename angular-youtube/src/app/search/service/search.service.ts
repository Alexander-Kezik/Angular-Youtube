import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IVideo } from 'src/app/models/IVideo.interface';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private _API_KEY = `AIzaSyCeOoU7zr3iFnu7EtEtSZodRc93xpEYG_E`;
    private _popularVideosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=BY&key=${this._API_KEY}`;

    constructor(private _http: HttpClient) {}

    public getPopularVideos(): Observable<IVideo[]> {
        return this._http.get<IVideo[]>(this._popularVideosUrl).pipe(
            map((data: any) => {
                return data.items.map((item: any) => {
                    return {
                        id: item.id.videoId,
                        snippet: {
                            title: item.snippet.title,
                            description: item.snippet.description,
                            imageUrl: item.snippet.thumbnails.high.url,
                        },
                    } as IVideo;
                });
            })
        );
    }
}
