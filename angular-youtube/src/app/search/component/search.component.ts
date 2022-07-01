import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchService } from '../service/search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    constructor(public searchService: SearchService, public sanitizer: DomSanitizer) {}
    videoListView = true;

    ngOnInit(): void {}

    changeView(): void {
        this.videoListView = !this.videoListView;
      }
}
