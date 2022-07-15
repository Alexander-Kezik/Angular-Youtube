import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelVideoSearchComponent } from './channel-video-search.component';

describe('ChannelVideoSearchComponent', () => {
  let component: ChannelVideoSearchComponent;
  let fixture: ComponentFixture<ChannelVideoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelVideoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelVideoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
