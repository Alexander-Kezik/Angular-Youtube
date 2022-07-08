import { Component } from '@angular/core';

@Component({
    selector: 'video-list-item',
    templateUrl: './video-list-item.component.html',
    styleUrls: ['./video-list-item.component.scss']
})

export class VideoListItemComponent {
    public isGrid: boolean = true;
}
