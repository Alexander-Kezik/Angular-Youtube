import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ICategory } from 'src/app/models/ICategory.interface';
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
