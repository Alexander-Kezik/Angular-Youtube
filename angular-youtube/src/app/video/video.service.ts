import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    private _API_KEY = 'AIzaSyDqwqGRfgRSQRXHfbTT7vrO6XMHk4gqXYM';

    constructor(private _http: HttpClient) {}

    public getCurrentVideo(id: string | null): Observable<any> {
        return this._http.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${id}&key=${this._API_KEY}`
        );
    }

    public getRelatedVideos(): Observable<any> {
        return this._http.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=6&regionCode=US&key=${this._API_KEY}`
        );
    }

    public getComments(id: string | null): Observable<any> {
        return this._http.get(
            `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${this._API_KEY}`
        );
    }
}
