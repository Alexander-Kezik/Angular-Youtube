import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { IVideo } from 'src/app/models/IVideo.interface';
import { SearchService } from '../service/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    public videoListView = true;
    public videos!: IVideo[];
    private _sub!: Subscription;

    constructor(
        private _searchService: SearchService,
        private _sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this._sub = this._searchService.getPopularVideos().subscribe((data) => {
            this.videos = data.items;
        });
    }

    ngOnDestroy(): void {
        this._sub.unsubscribe();
    }

    public changeView(): void {
        this.videoListView = !this.videoListView;
    }
}
