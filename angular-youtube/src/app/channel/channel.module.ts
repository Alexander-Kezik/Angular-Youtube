import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from "@angular/router";

import { ChannelComponent } from './channel.component';
import { ChannelSubscribeBtnComponent } from "./channelSubscribeBtn/channelSubscribeBtn.component";
import { ChannelDataComponent } from './channelData/channel-data.component';
import { ChannelTabsComponent } from './channelTabs/channel-tabs.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ChannelComponent,
        ChannelSubscribeBtnComponent,
        ChannelDataComponent,
        ChannelTabsComponent
    ],
    imports: [
        RouterModule.forChild([
            // { path: 'channel-page/video' },
            // { path: 'channel-page/playlists' },
            // { path: 'channel-page/community' },
            // { path: 'channel-page/channels' },
            // { path: 'channel-page/about' }
        ]),
        SharedModule,
        MatIconModule
    ]
})

export class ChannelModule { }
