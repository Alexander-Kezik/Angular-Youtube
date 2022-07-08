import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
import { IVideo } from 'src/app/models/IVideo.interface';
import { IVideoSnippet } from 'src/app/models/IVideoSnippet.interface';
import { SearchService } from './search.service';

describe('SearchService', () => {
    let service: SearchService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let VIDEOS: IVideoSnippet[] = [
        {
            title: 'cat',
            description: 'cat',
            imageUrl: 'url',
            channelTitle: 'title',
            channelId: '1',
            publishedAt: 'date',
            thumbnails: {
                high: {
                    url: 'url'
                }
            }
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

    let API_CATEGORIES: any = {
        items: {
            id: '1',
            snippet: {
                title: 'category',
                assignable: true,
            },
        },
    };

    let API_VIDEOS: any = {
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

    it('should get videos', () => {
        httpClientSpy.get.and.returnValue(of(API_VIDEOS));
        service.getVideos([]).subscribe({
            next: (videos) => {
                expect(videos).toEqual(VIDEOS);
            },
            error: (err: any) => {
                expect(err).toBeInstanceOf(String);
            }
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });

    it('should get categories', () => {
        httpClientSpy.get.and.returnValue(of(API_CATEGORIES));
        service.getVideoCategories().subscribe({
            next: (videos) => {
                expect(videos).toEqual(CATEGORIES);
            },
            error: (err: any) => {
                expect(err).toBeInstanceOf(String);
            }
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
});