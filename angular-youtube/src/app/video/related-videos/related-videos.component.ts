import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

import { IVideo } from '../../models/IVideo.interface';

@Component({
    selector: 'app-related-videos',
    templateUrl: './related-videos.component.html',
    styleUrls: ['./related-videos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedVideosComponent implements OnInit {
    @Input() relatedVideos: IVideo[] = [];

    constructor() {}

    ngOnInit(): void {}
}
