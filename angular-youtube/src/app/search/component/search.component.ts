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
export class SearchComponent implements OnInit {
    public videoListView = true;
    public videos$!: Observable<IVideo[]>;

    constructor(private _searchService: SearchService) {}

    ngOnInit(): void {
        this.videos$ = this._searchService.getPopularVideos();
    }

    public changeView(): void {
        this.videoListView = !this.videoListView;
    }
}
