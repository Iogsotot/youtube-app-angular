import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CardComponent } from '../../shared/card/card.component';
import { CardDetailedComponent } from './components/card-detailed/card-detailed.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    CardDetailedComponent,
    FilterComponent,
    SearchResultComponent,
    CardComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [FilterComponent, SearchResultComponent],
})
export class YoutubeModule {}
