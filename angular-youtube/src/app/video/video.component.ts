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
    public currentVideo: IVideo = {
        id: 'DPMluEVUqS0',
        snippet: {
            title: 'so long nerds',
            description: `--------------------------------\\nBUY MY MERCHANDISE: https://technoblade.com/\\n\\nbecome a CHANNEL MEMBER here: https://www.youtube.com/channel/UCFAiFyGs6oDiF1Nf-rRJpZA/join\\n\\nother YT channel (go subscribe): https://www.youtube.com/channel/UCV--8wtuyGo3vMtIdeq4j3w\\n\\nfollow me on twitter too: https://twitter.com/Technothepig\\n\\nServer: mc.hypixel.net\\nResource Pack: https://www.youtube.com/watch?v=fRDaP1aAPug\\nWill I add you as a friend?: https://imgur.com/a/x6fEtzB`,
        },
    };

    public relatedVideos$!: IVideo[];

    constructor(
        private _videoService: VideoService,
        private _sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this._videoService.getRelatedVideos().subscribe((data) => {
            this.relatedVideos$ = data.items;
        });
    }

    public createSafeUrl(id: string): SafeResourceUrl {
        const untrustedUrl = 'https://www.youtube.com/embed/' + id;
        return this._sanitizer.bypassSecurityTrustResourceUrl(untrustedUrl);
    }
}
