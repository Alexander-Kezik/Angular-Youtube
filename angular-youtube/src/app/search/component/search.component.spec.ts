import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchService } from '../service/search.service';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let service: SearchService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = TestBed.inject(SearchService);
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
        const mySpy = spyOn(service, 'getVideosBySortingCondition');

        component.query = 'cats';
        component.showVideosBySortCondition('data');
        expect(mySpy).toHaveBeenCalled();
    });

    it('should call getPopularVideos when showVideosByFilter if there is no category', () => {
        const mySpy = spyOn(service, 'getPopularVideos');

        component.showVideosByFilter('');
        expect(mySpy).toHaveBeenCalled();
    });

    it('should call getVideosByFilter when showVideosByFilter if there is a category', () => {
        const mySpy = spyOn(service, 'getVideosByFilter');

        component.showVideosByFilter('1');
        expect(mySpy).toHaveBeenCalled();
    });
});
