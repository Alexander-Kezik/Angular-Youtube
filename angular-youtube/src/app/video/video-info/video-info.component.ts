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
    public isLikeActive: boolean = false;
    public isDislikeActive: boolean = false;

    constructor() {}

    public toggleLike(): void {
        this.isLikeActive = !this.isLikeActive;
        this.isDislikeActive = false;
    }

    public toggleDislike(): void {
        this.isDislikeActive = !this.isDislikeActive;
        this.isLikeActive = false;
    }

    public toggleDescription(): void {
        this.showDescription = !this.showDescription;
    }

    public toggleSubscribe(): void {
        this.isSubscribe = !this.isSubscribe;
    }

    ngOnInit(): void {}
}
