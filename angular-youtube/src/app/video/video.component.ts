import { Component, OnInit } from '@angular/core';

import { IVideo } from '../models/IVideo.interface';
import { VideoService } from './service/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    public currentVideo!: IVideo;
    public relatedVideos!: IVideo[];

    constructor(
        private _videoService: VideoService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this._route.snapshot.paramMap.get('id');
        this._videoService.getCurrentVideo(id).subscribe((data) => {
            this.currentVideo = data.items[0]
        })
        this._videoService.getRelatedVideos().subscribe((data) => {
            this.relatedVideos = data.items;
        });
    }
}
