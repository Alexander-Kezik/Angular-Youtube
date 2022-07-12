import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/IVideo.interface';
import { HistoryService } from './service/history.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
    public watchedVideos: IVideo[] = [];
    public getWatchedVideos: { [id: string]: Date } = {};

    constructor(private _historyService: HistoryService) {}

    ngOnInit(): void {
        if (localStorage.getItem('watchedVideos') !== null) {
            this.getWatchedVideos = JSON.parse(
                localStorage.getItem('watchedVideos')!
            );
        }

        Object.keys(this.getWatchedVideos).forEach((videoId) =>
            this._historyService.getVideo(videoId).subscribe((data) => {
                this.watchedVideos.push(data[0]);
            })
        );
    }

    public clearWatchHistory(): void {
        localStorage.removeItem('watchedVideos');
        this._reloadPage();
    }

    public clearSearchHistory(): void {
        localStorage.removeItem('searchHistory');
        this._reloadPage();
    }

    private _reloadPage(): void {
        location.reload();
    }
}
