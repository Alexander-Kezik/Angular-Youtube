import { Component, OnInit } from '@angular/core';
import { IVideo } from '../models/IVideo.interface';
import { VideoService } from './video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
    public currentVideo!: IVideo;
    public relatedVideos$!: IVideo[];

    constructor(
        private _videoService: VideoService,
        private _sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this._videoService.getRelatedVideos().subscribe((data) => {
            this.relatedVideos$ = data.items;
            this.currentVideo = data.items[0];
        });
    }

    public createSafeUrl(id: string): SafeResourceUrl {
        const untrustedUrl = 'https://www.youtube.com/embed/' + id;
        return this._sanitizer.bypassSecurityTrustResourceUrl(untrustedUrl);
    }
}
