import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/component/search.component';
import { ChannelComponent } from "./channel/channel.component";

const routes: Routes = [
    {
        path: 'search-page',
        component: SearchComponent,
        pathMatch: 'full',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    },
    {
        path: 'video-page',
        loadChildren: () => import('./video/video.module').then((m) => m.VideoModule),
    },
    {
        path: 'channel-page',
        component: ChannelComponent,
        pathMatch: 'full',
        loadChildren: () => import('./channel/channel.module').then(m => m.ChannelModule)
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
