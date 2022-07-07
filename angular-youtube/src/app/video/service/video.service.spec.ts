import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { VideoService } from './video.service';
import { HttpClientModule } from '@angular/common/http';

describe('VideoService', () => {
    let videoService: VideoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        videoService = TestBed.inject(VideoService);
    });

    it('should be created', () => {
        expect(videoService).toBeTruthy();
    });

    it(
        'should retrieves comments by videoId',
        waitForAsync(
            inject([VideoService], (videoService: VideoService) => {
                const id = 'qjoz-CAO3xQ';
                videoService
                    .getComments(id)
                    .subscribe((result) =>
                        expect(result.items.length).toBeGreaterThan(0)
                    );
            })
        )
    );

    it(
        'should retrieves relatedVideos',
        waitForAsync(
            inject([VideoService], (videoService: VideoService) => {
                videoService
                    .getRelatedVideos()
                    .subscribe((result) =>
                        expect(result.items.length).toBeGreaterThan(0)
                    );
            })
        )
    );

    it(
        'should retrieves currentVideo by videoId',
        waitForAsync(
            inject([VideoService], (videoService: VideoService) => {
                const id = 'qjoz-CAO3xQ';
                videoService
                    .getCurrentVideo(id)
                    .subscribe((result) => expect(result.items.length).toBe(1));
            })
        )
    );
});
