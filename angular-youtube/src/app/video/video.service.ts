import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VideoService {
    private _API_KEY = 'AIzaSyDqwqGRfgRSQRXHfbTT7vrO6XMHk4gqXYM';
    private _relatedVideosUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=US&key=${this._API_KEY}`;

    constructor(private _http: HttpClient) {}

    public getRelatedVideos(): Observable<any> {
        return this._http.get(this._relatedVideosUrl);
    }
}
