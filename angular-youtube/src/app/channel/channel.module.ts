import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { ChannelComponent } from './channel.component';
import { ChannelDataComponent } from './channel-data/channel-data.component';
import { ChannelTabsComponent } from './channel-tabs/channel-tabs.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ChannelComponent,
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
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})

export class ChannelModule { }
