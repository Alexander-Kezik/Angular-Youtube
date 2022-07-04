import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
    let service: SharedService;
    let query = 'some query';

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SharedService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return a query which is passed from header.component to sendClickEvent method', () => {
        service.sendClickEvent(query);
        expect(service.getQuery()).toEqual(query);
    });
});
