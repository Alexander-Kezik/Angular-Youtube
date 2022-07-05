import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { IVideo } from '../../models/IVideo.interface';

@Component({
    selector: 'app-video-info',
    templateUrl: './video-info.component.html',
    styleUrls: ['./video-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoInfoComponent implements OnInit {
    @Input() currentVideo?: IVideo;

    public showDescription: boolean = true;
    public isSubscribe: boolean = false;
    public videoLike: any = {};
    public videoDislike: any = {};

    constructor() {}

    public addVideoLike(id: string): void {
        if (!Object.keys(this.videoLike).includes(id)) {
            this.videoLike[id] = 1;
            this.videoDislike[id] = undefined;
            this.videoDislike = JSON.parse(JSON.stringify(this.videoDislike));
        }
    }

    public checkVideoLike(id: string): boolean {
        return Object.keys(this.videoLike).includes(id);
    }

    public addVideoDislike(id: string): void {
        if (!Object.keys(this.videoDislike).includes(id)) {
            this.videoDislike[id] = 1;
            this.videoLike[id] = undefined;
            this.videoLike = JSON.parse(JSON.stringify(this.videoLike));
        }
    }

    public checkVideoDislike(id: string): boolean {
        return Object.keys(this.videoDislike).includes(id);
    }

    public toggleDescription(): void {
        this.showDescription = !this.showDescription;
    }

    public toggleSubscribe(): void {
        this.isSubscribe = !this.isSubscribe;
    }

    ngOnInit(): void {}
}
