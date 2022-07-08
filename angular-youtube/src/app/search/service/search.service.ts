import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, catchError, throwError } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IVideo } from 'src/app/models/IVideo.interface';
import { IVideoSnippet } from 'src/app/models/IVideoSnippet.interface';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private _API_KEY = `AIzaSyDKxnbEapmfG4wXUN7P2OvRFduM-GxsEhI`;
    private _API_URL = `https://youtube.googleapis.com/youtube/v3`;

    constructor(private _http: HttpClient) {}

    public getVideos(arg: any): Observable<IVideoSnippet[]> {
        const params = [
            { 'part=': 'snippet' },
            { 'chart=': arg.chart },
            { 'maxResults=': '50' },
            { 'type=': arg.type },
            { 'videoCategoryId=': arg.videoCategoryId },
            { 'regionCode=': arg.regionCode },
            { 'q=': arg.q },
            { 'order=': arg.order },
            { 'key=': this._API_KEY },
        ]
            // избавляемся от объектов, значения которых не пришли из search.component
            .filter((param) => Object.values(param)[0])
            // объединяем ключ и значение в одну строку
            .map(
                (param) => `${Object.keys(param)[0]}${Object.values(param)[0]}`
            );

        const videosUrl = `${this._API_URL}/${arg.searchType}?${params.join(
            '&'
        )}`;

        return this._http.get<IVideoSnippet[]>(videosUrl).pipe(
            tap((data: any) => console.log(JSON.stringify(data))),
            map((data: any) => {
                return data.items.map((item: any) => {
                    return {
                        title: item.snippet.title,
                        description: item.snippet.description,
                        imageUrl: item.snippet.thumbnails.high.url,
                        channelTitle: item.snippet.channelTitle,
                        channelId: item.snippet.channelTitle,
                    } as IVideoSnippet;
                });
            }),
            catchError(this.handleError)
        );
    }

    public getVideoCategories(): Observable<ICategory[]> {
        const searchType = 'videoCategories';
        const queryParams = [
            'part=snippet',
            'regionCode=BY',
            `key=${this._API_KEY}`,
        ];
        const categoriesUrl = `${
            this._API_URL
        }/${searchType}?${queryParams.join('&')}`;

        return this._http.get<ICategory[]>(categoriesUrl).pipe(
            map((data: any) =>
                data.items.filter((item: any) => item.snippet.assignable)
            ),
            tap((data: any) =>
                console.log('After filter', JSON.stringify(data))
            ),
            map((data: any) => {
                return data.map((item: any) => {
                    return {
                        id: item.id,
                        snippet: {
                            title: item.snippet.title,
                            assignable: item.snippet.assignable,
                        },
                    } as ICategory;
                });
            }),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        return throwError(() => errorMessage);
    }
}
