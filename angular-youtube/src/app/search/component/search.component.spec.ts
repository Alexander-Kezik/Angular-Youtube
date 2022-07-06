import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchService } from '../service/search.service';
import { EMPTY, of } from 'rxjs';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let service: SearchService;
    let fixture: ComponentFixture<SearchComponent>;
    let activatedRouter: ActivatedRoute;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        const spyHttp = jasmine.createSpyObj('HttpClient', { get: of({}) });
        service = new SearchService(spyHttp);
        component = new SearchComponent(service, activatedRouter, router);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should change videoListView from true to false', () => {
        component.videoListView = true;
        component.changeView();
        expect(component.videoListView).toEqual(false);
    });

    it('should change videoListView from false to true', () => {
        component.videoListView = false;
        component.changeView();
        expect(component.videoListView).toEqual(true);
    });

    it('should call getVideosBySortingCondition when showVideosBySortCondition', () => {
        const spy = spyOn(service, 'getVideosBySortingCondition').and.callFake(() => {
            return EMPTY;
            }
        );
        component.query = 'cats';
        component.showVideosBySortCondition('data');
        expect(spy).toHaveBeenCalled();
    });

    it('should call getPopularVideos when showVideosByFilter if there is no category', () => {
        const spy = spyOn(service, 'getPopularVideos').and.callFake(() => {
            return EMPTY;
            }
        );
        component.showVideosByFilter('');
        expect(spy).toHaveBeenCalled();
    });

    it('should call getVideosByFilter when showVideosByFilter if there is a category', () => {
        const spy = spyOn(service, 'getVideosByFilter').and.callFake(() => {
            return EMPTY;
            }
        );
        component.showVideosByFilter('1');
        expect(spy).toHaveBeenCalled();
    });

});
