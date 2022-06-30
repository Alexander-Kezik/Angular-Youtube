import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from "./channel/channel.component";

const routes: Routes = [
    //     path: '/search-page',
    // },
    {
        path: '/channel-page',
        component: ChannelComponent,
        pathMatch: 'full'
    },
    // {
    //     path: '/video-page',
    // },
    // {
    //     path: '**',
    //     redirectTo: '',
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
