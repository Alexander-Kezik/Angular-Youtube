import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IVideo } from '../../models/IVideo.interface';

@Component({
    selector: 'app-related-videos',
    templateUrl: './related-videos.component.html',
    styleUrls: ['./related-videos.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelatedVideosComponent implements OnInit {
    @Input() relatedVideos: IVideo[] = [];

    constructor(private _sanitizer: DomSanitizer) {}

    ngOnInit(): void {}

    public createSafeUrl(id: string): SafeResourceUrl {
        const untrustedUrl = 'https://www.youtube.com/embed/' + id;
        return this._sanitizer.bypassSecurityTrustResourceUrl(untrustedUrl);
    }
}
