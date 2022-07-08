import { SearchComponent } from './search.component';
import { of } from 'rxjs';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let activatedRoute: any;
    let router: any;

    let mockService = jasmine.createSpyObj('SearchService', {
        getVideos: of(),
        getVideoCategories: of(),
    });

    component = new SearchComponent(mockService, activatedRoute, router);

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
            type: 'video',
            videoCategoryId: `${categoryId}`,
        });
    });

    it('should call getVideos with popular videos when showVideosByFilter', () => {
        let categoryId = '';
        component.showVideosByFilter(categoryId);
        expect(mockService.getVideos).toHaveBeenCalledWith({
            searchType: 'videos',
            chart: 'mostPopular',
            regionCode: 'BY',
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
            type: 'video',
        });
    });
});