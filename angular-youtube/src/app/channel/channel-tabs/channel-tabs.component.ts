import { Component } from '@angular/core';

@Component({
    selector: 'channel-tabs',
    templateUrl: './channel-tabs.component.html',
    styleUrls: ['./channel-tabs.component.scss']
})

export class ChannelTabsComponent {
    public isSearching: boolean = false;

    private _searchVideo: string = '';

    public get searchVideo(): string {
        return this._searchVideo;
    }

    public set searchVideo(value: string) {
        this._searchVideo = value;
    }

    public onSearch(): void {
        this.isSearching = !this.isSearching;
    }

    public onHideSearching(): void {
        this.isSearching = false;
    }
}
