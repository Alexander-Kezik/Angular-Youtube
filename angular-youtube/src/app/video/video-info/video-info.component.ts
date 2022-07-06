import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-video-info',
    templateUrl: './video-info.component.html',
    styleUrls: ['./video-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoInfoComponent implements OnInit {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() channelTitle: string = '';
    @Input() viewCount: number = 0;
    @Input() likeCount: number = 0;
    @Input() commentCount: number = 0;

    public showDescription: boolean = true;
    public subscribe: boolean = false;
    public likeActive: boolean = false;
    public dislikeActive: boolean = false;

    constructor() {}

    public toggleLike(): void {
        this.likeActive = !this.likeActive;
        this.dislikeActive = false;
    }

    public toggleDislike(): void {
        this.dislikeActive = !this.dislikeActive;
        this.likeActive = false;
    }

    public toggleDescription(): void {
        this.showDescription = !this.showDescription;
    }

    public toggleSubscribe(): void {
        this.subscribe = !this.subscribe;
    }

    ngOnInit(): void {}
}
