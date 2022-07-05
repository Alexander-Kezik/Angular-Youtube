import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/component/search.component';

const routes: Routes = [
    {
        path: 'search-page',
        component: SearchComponent,
        pathMatch: 'full',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    },
    // {
    //     path: '/channel-page',
    // },
    // {
    //     path: '/video-page',
    // },
    // {
    //     path: '**',
    //     redirectTo: '/',
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
