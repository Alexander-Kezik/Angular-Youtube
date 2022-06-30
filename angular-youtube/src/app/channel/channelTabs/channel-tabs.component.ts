import {Component, Input } from '@angular/core';

@Component({
    selector: 'channel-tabs',
    templateUrl: './channel-tabs.component.html',
    styleUrls: ['./channel-tabs.component.scss']
})
export class ChannelTabsComponent {
    private _searchVideo: string = '';
    isSearching: boolean = false;

    get searchVideo(): string {
        return this._searchVideo;
    }

    set searchVideo(value: string) {
        this._searchVideo = value;
    }

    onSearch(e: Event): void {
        this.isSearching = !this.isSearching;
        e.stopPropagation();
    }
}
