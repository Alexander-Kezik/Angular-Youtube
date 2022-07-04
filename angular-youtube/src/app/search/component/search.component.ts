import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    public query!: string | null;

    constructor(
        private _searchService: SearchService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this._showVideosByQuery();
    }

    ngOnInit(): void {
        this.videos$ = this._searchService.getPopularVideos();
    }

    public changeView(): void {
        this.videoListView = !this.videoListView;
    }

    private _showVideosByQuery() {
        this.router.events.subscribe(() => {
            this.query = this.activatedRoute.snapshot.queryParamMap.get('search_query');
            if (this.query) {
                this.videos$ = this._searchService.getVideosByQuery(String(this.query));
            } else {
                this.videos$ = this._searchService.getPopularVideos();
            }
        });
    }
}
