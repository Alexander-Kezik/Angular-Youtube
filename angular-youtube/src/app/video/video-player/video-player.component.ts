import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-player',
    templateUrl: './video-player.component.html',
    styleUrls: ['./video-player.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit {
    @Input() id: string = '';

    constructor(private _sanitizer: DomSanitizer) {}

    ngOnInit(): void {}

    public createSafeUrl(id: string): SafeResourceUrl {
        const untrustedUrl = 'https://www.youtube.com/embed/' + id;
        return this._sanitizer.bypassSecurityTrustResourceUrl(untrustedUrl);
    }
}
