import { SearchComponent } from './search.component';
import { of } from 'rxjs';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let activatedRoute: any;
    let routerMock: any;

    let mockService = jasmine.createSpyObj('SearchService', {
        getVideos: of(),
        getVideoCategories: of(),
    });

    routerMock = {
        events: of()
    }

    component = new SearchComponent(mockService, activatedRoute, routerMock);

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

    it('should call getVideos with filtering videos when showVideosByFilter', () => {
        let categoryId = '1';
        component.showVideosByFilter(categoryId);
        expect(mockService.getVideos).toHaveBeenCalledWith({
            searchType: 'search',
            videoCategoryId: `${categoryId}`,
        });
    });

    it('should call getVideos with popular videos when showVideosByFilter', () => {
        let categoryId = '';
        component.showVideosByFilter(categoryId);
        expect(mockService.getVideos).toHaveBeenCalledWith({
            searchType: 'videos',
        });
    });

    it('should call getVideos when showVideosBySortCondition', () => {
        component.query = 'cats';
        let sortCondition = 'data';
        component.showVideosBySortCondition(sortCondition);
        expect(mockService.getVideos).toHaveBeenCalledWith({
            searchType: 'search',
            order: `${sortCondition}`,
            q: `${component.query}`,
        });
    });

    it('should call getVideos and getVideoCategories when ngOnInit', () => {
        component.query = 'cats';
        component.ngOnInit();
        expect(mockService.getVideos).toHaveBeenCalledWith({
            searchType: 'videos',
        });
        expect(mockService.getVideoCategories).toHaveBeenCalled();
    });
});