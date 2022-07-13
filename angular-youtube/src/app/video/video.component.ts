import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IVideo } from '../models/IVideo.interface';
import { VideoService } from './service/video.service';
import { IComment } from '../models/IComment.interface';
import { map, mergeMap, switchMap } from 'rxjs';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    public currentVideo?: IVideo;
    public relatedVideos: IVideo[] = [];
    public comments: IComment[] = [];
    public watchedVideos: { [id: string]: string } = {};

    constructor(
        private _videoService: VideoService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            this.getCurrentVideo(params['id']);
        });
    }

    public getRelatedVideos(id: string): void {
        this._videoService.getRelatedVideos(id).subscribe((data) => {
            this.relatedVideos = data;
        });
    }

    public getCurrentVideo(id: string): void {
        this._videoService.getCurrentVideo(id).subscribe((data) => {
            this.currentVideo = data[0];
            this.getRelatedVideos(this.currentVideo.id);
            this.addVideoToTheHistory(this.currentVideo.id);
            this.getComments(this.currentVideo.id);
        });
    }

    public getComments(id: string): void {
        this._videoService.getComments(id).subscribe((data) => {
            this.comments = data;
        });
    }

    public addVideoToTheHistory(id: string): void {
        if (localStorage.getItem('watchedVideos') !== null) {
            this.watchedVideos = JSON.parse(
                localStorage.getItem('watchedVideos')!
            );
        }

        let hours =
            new Date().getHours() < 10
                ? '0' + new Date().getHours()
                : new Date().getHours();
        let minutes =
            new Date().getMinutes() < 10
                ? '0' + new Date().getMinutes()
                : new Date().getMinutes();

        if (!Object.keys(this.watchedVideos).includes(id)) {
            this.watchedVideos[id] = hours + ':' + minutes;
        }

        localStorage.setItem(
            'watchedVideos',
            JSON.stringify(this.watchedVideos)
        );
    }
}
