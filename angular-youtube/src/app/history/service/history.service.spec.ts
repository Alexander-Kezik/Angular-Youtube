import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HistoryService } from './history.service';

describe('HistoryService', () => {
    let historyService: HistoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        historyService = TestBed.inject(HistoryService);
    });

    it('should be created', () => {
        expect(historyService).toBeTruthy();
    });

    it(
        'should retrieves video by videoId',
        waitForAsync(() => {
            const id = 'qjoz-CAO3xQ';
            historyService
                .getVideo(id)
                .subscribe((result) =>
                    expect(result.length).toBeGreaterThan(0)
                );
        })
    );
});
