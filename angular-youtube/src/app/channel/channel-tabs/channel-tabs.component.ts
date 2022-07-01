import { Component } from '@angular/core';

@Component({
    selector: 'channel-tabs',
    templateUrl: './channel-tabs.component.html',
    styleUrls: ['./channel-tabs.component.scss']
})

export class ChannelTabsComponent {
    private _searchVideo: string = '';

    public isSearching: boolean = false;

    public get searchVideo(): string {
        return this._searchVideo;
    }

    public set searchVideo(value: string) {
        this._searchVideo = value;
    }

    public onSearch(e: Event): void {
        this.isSearching = !this.isSearching;
        e.stopPropagation();
    }
}
