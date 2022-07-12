import {
    ComponentFixture,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HistoryComponent } from './history.component';
import { HistoryService } from './service/history.service';
import { of } from 'rxjs';

describe('HistoryComponent', () => {
    let component: HistoryComponent;
    let historyService: HistoryService;
    let fixture: ComponentFixture<HistoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [HistoryComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        historyService = TestBed.inject(HistoryService);
        fixture.detectChanges();

        let store: any = {};
        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
        };

        spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should clear local storage with watch history', () => {
        spyOn(component as any, '_reloadPage').and.callFake(function () {});

        component.clearHistory();

        expect(localStorage.getItem('watchedVideos')).toBe(null);
    });

    it('should get watch history', () => {
        const mockVideo = JSON.stringify({
            TmaAOV4SJNQ: '11:58',
        });
        localStorage.setItem('watchedVideos', mockVideo);
        component.ngOnInit();
        expect(component.getWatchedVideos).toEqual(JSON.parse(mockVideo));
    });

    it('should set watchedVideos', fakeAsync(() => {
        const mockVideo = JSON.stringify({
            TmaAOV4SJNQ: '11:58',
        });
        localStorage.setItem('watchedVideos', mockVideo);
        const mockWatchedVideos = [
            {
                id: 'TmaAOV4SJNQ',
                snippet: {
                    title: 'asd',
                    description: 'asd',
                    imageUrl: 'asd',
                    channelTitle: 'asd',
                    channelId: 'asd',
                },
                statistics: {
                    viewCount: 1,
                    likeCount: 1,
                    commentCount: 1,
                },
            },
        ];
        spyOn(historyService, 'getVideo').and.returnValue(
            of(mockWatchedVideos)
        );
        expect(component.watchedVideos).toEqual([]);
        component.ngOnInit();
        tick();

        expect(component.watchedVideos).toEqual(mockWatchedVideos);
    }));
});
