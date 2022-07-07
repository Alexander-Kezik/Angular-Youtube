import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelChannelsComponent } from './channel-channels.component';

describe('ChannelChannelsComponent', () => {
  let component: ChannelChannelsComponent;
  let fixture: ComponentFixture<ChannelChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
