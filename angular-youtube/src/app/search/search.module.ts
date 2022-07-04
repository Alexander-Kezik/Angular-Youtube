import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './component/search.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule],
})
export class SearchModule {}
