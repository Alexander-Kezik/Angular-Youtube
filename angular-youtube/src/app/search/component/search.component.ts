import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IVideo } from 'src/app/models/IVideo.interface';
import { SharedService } from 'src/app/shared/shared-service/shared.service';
import { SearchService } from '../service/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public videoListView = true;
    public videos$!: Observable<IVideo[]>;
    public categories$!: Observable<ICategory[]>;
    private _clickEventSubscription: Subscription;

    constructor(
        private _searchService: SearchService,
        private _sharedService: SharedService
    ) {
        this._clickEventSubscription = this._sharedService
            .getClickEvent()
            .subscribe(() => {
                this._showVideosByQuery(this._sharedService.getQuery());
            });
    }

    ngOnInit(): void {
        this.videos$ = this._searchService.getPopularVideos();
        this.categories$ = this._searchService.getVideoCategories();
    }

    public changeView(): void {
        this.videoListView = !this.videoListView;
    }

    public showVideosByFilter(value: string) {
        if (!value) {
            this.videos$ = this._searchService.getPopularVideos();
        } else {
            this.videos$ = this._searchService.getVideosByFilter(value);
        }
    }

    private _showVideosByQuery(query: string) {
        this.videos$ = this._searchService.getVideosByQuery(query);
    }
}
