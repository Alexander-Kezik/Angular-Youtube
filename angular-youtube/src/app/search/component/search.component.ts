import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IVideo } from 'src/app/models/IVideo.interface';
import { SearchService } from '../service/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public videoListView = true;
    public showFilter = true;
    public videos$!: Observable<IVideo[]>;
    public categories$!: Observable<ICategory[]>;
    public query: string | null = null;

    constructor(
        private _searchService: SearchService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.videos$ = this._searchService.getPopularVideos();
        this.categories$ = this._searchService.getVideoCategories();
        this._showVideosByQuery();
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

    private _showVideosByQuery() {
        this._router.events.subscribe(() => {
            this.query = this._activatedRoute.snapshot.queryParamMap.get('search_query');
            if (this.query) {
                this.videos$ = this._searchService.getVideosByQuery(String(this.query));
                this.showFilter = false;
            } else {
                this.videos$ = this._searchService.getPopularVideos();
                this.showFilter = true;
            }
        });
    }
}
