import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListItemComponent } from './video-list-item.component';

describe('VideoListItemComponent', () => {
    let component: VideoListItemComponent;
    let fixture: ComponentFixture<VideoListItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ VideoListItemComponent ]
        }).compileComponents();

        fixture = TestBed.createComponent(VideoListItemComponent);
        component = fixture.componentInstance;

        component.item = {
            id: '1',
            snippet: {
                title: 'some title',
                description: 'some descr',
                channelTitle: 'channel title',
                publishedAt: '2022-12-12',
                channelId: '1',
                thumbnails: {
                    high: {
                        url: 'https://someURL'
                    }
                }
            },
            statistics: {
                viewCount: 100,
                likeCount: 50,
                commentCount: 10
            }
        }
        component.isGrid = true;
    });

    it('should create component', () => {
        fixture.detectChanges();

        expect(component).toBeTruthy();
    });

    it('should get correct data', () => {
        fixture.detectChanges();

        expect(component.isGrid).toBe(true);
        expect(component.item?.id).toBe('1');
    });
});
