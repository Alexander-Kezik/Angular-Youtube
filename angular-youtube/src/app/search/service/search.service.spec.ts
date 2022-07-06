import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { inject } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IVideo } from 'src/app/models/IVideo.interface';

import { SearchService } from './search.service';

interface IAPICategory {
    items: {
        id: string;
        snippet: {
            title: string;
            assignable: boolean;
        };
    };
}

interface IAPIVideo {
    items: {
        id: string;
        snippet: {
            title: string;
            description: string;
            thumbnails: {
                high: {
                    url: string;
                };
            };
        };
    };
}

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

    let CATEGORIES: ICategory[] = [
        {
            id: '1',
            snippet: {
                title: 'category',
                assignable: true,
            },
        },
    ];

    let API_CATEGORIES: IAPICategory = {
        items: {
            id: '1',
            snippet: {
                title: 'category',
                assignable: true,
            },
        },
    };

    let API_VIDEOS: IAPIVideo = {
        items: {
            id: '1',
            snippet: {
                title: 'title',
                description: 'description',
                thumbnails: {
                    high: {
                        url: 'url',
                    },
                },
            },
        },
    };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new SearchService(httpClientSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get popular videos', () => {
        httpClientSpy.get.and.returnValue(of(API_VIDEOS));
        service.getPopularVideos().subscribe({
            next: (videos) => {
                expect(videos).toEqual(VIDEOS);
            },
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

    it('should get categories', () => {
        httpClientSpy.get.and.returnValue(of(API_CATEGORIES));
        service.getVideoCategories().subscribe({
            next: (videos) => {
                expect(videos).toEqual(CATEGORIES);
            },
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
});
