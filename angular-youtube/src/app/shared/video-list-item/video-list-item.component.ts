import { Component, Input } from '@angular/core';
import {IVideo} from "../../models/IVideo.interface";

@Component({
    selector: 'video-list-item',
    templateUrl: './video-list-item.component.html',
    styleUrls: ['./video-list-item.component.scss']
})

export class VideoListItemComponent {
    @Input() public isGrid: boolean = false;
    @Input() public item!: IVideo;
}
