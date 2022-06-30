import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, MatCardModule],
})
export class SearchModule {}
