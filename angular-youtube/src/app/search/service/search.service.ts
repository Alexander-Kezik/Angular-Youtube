import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IVideo } from 'src/app/models/IVideo.interface';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private _API_KEY = `AIzaSyCeOoU7zr3iFnu7EtEtSZodRc93xpEYG_E`;
    private _API_URL = `https://youtube.googleapis.com/youtube/v3`;

    constructor(private _http: HttpClient) {}

    public getPopularVideos(): Observable<IVideo[]> {
        const searchType = 'videos';
        const queryParams = [
            'part=snippet',
            'chart=mostPopular',
            'maxResults=50',
            'regionCode=BY',
            `key=${this._API_KEY}`,
        ];

        const videosUrl = `${this._API_URL}/${searchType}?${queryParams.join('&')}`;
        return this._getVideos(videosUrl);
    }

    public getVideosByQuery(query: string): Observable<IVideo[]> {
        const searchType = 'search';
        const queryParams = [
            'part=snippet',
            'maxResults=50',
            `q=${query}`,
            `key=${this._API_KEY}`,
        ];

        const videosUrl = `${this._API_URL}/${searchType}?${queryParams.join('&')}`;
        return this._getVideos(videosUrl);
    }

    public _getVideos(url: string): Observable<IVideo[]> {
        return this._http.get<IVideo[]>(url).pipe(
            tap((data: any) => console.log(JSON.stringify(data))),
            map((data: any) => {
                return data.items.map((item: any) => {
                    return {
                        id: item.id,
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
