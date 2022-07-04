import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { IVideo } from 'src/app/models/IVideo.interface';

import { SearchService } from './search.service';

describe('SearchService', () => {
    let service: SearchService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let VIDEOS: IVideo[] = [
        {
            id: '1',
            snippet: {
                title: 'title',
                description: 'description',
                imageUrl: 'url',
            },
        },
    ];

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new SearchService(httpClientSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get popular videos', () => {
        httpClientSpy.get.and.returnValue(of(VIDEOS));
        service.getPopularVideos().subscribe({
            next: (videos) => {
                expect(videos).toEqual(VIDEOS);
            },
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
});
