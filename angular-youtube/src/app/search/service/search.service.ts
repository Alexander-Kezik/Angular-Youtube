import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, catchError, throwError } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IVideo } from 'src/app/models/IVideo.interface';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private _API_KEY = `AIzaSyBxmwgRaBt6XEZ_rbfvh311kOUxR5vOaMI`;
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

        const videosUrl = `${this._API_URL}/${searchType}?${queryParams.join(
            '&'
        )}`;
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

        const videosUrl = `${this._API_URL}/${searchType}?${queryParams.join(
            '&'
        )}`;
        return this._getVideos(videosUrl);
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
            })
        );
    }

    public getVideosByFilter(categoryId: string): Observable<IVideo[]> {
        const searchType = 'search';
        const queryParams = [
            'part=snippet',
            'maxResults=50',
            'type=video',
            `videoCategoryId=${categoryId}`,
            `key=${this._API_KEY}`,
        ];

        const videosUrl = `${this._API_URL}/${searchType}?${queryParams.join(
            '&'
        )}`;
        return this._getVideos(videosUrl);
    }

    public getVideosBySortingCondition(sortCondition: string, query: string): Observable<IVideo[]> {
        const searchType = 'search';
        const queryParams = [
            'part=snippet',
            'maxResults=50',
            `order=${sortCondition}`,
            `q=${query}`,
            'type=video',
            `key=${this._API_KEY}`,
        ];

        const videosUrl = `${this._API_URL}/${searchType}?${queryParams.join(
            '&'
        )}`;
        return this._getVideos(videosUrl);
    }

    private _getVideos(url: string): Observable<IVideo[]> {
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
            }),
            catchError((err) => {
                let errorMessage: string;
                if (err.error instanceof ErrorEvent) {
                    errorMessage = `An error occurred: ${err.error.message}`;
                } else {
                    errorMessage = `Backend returned code ${err.status}: ${err.message}`;
                }
                return throwError(() => errorMessage);
            })
        );
    }
}
