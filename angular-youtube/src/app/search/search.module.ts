import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './component/search.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class SearchModule {}
