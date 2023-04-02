import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { CardComponent } from '../../shared/card/card.component';
import { CardDetailedPageComponent } from './components/card-detailed-page/card-detailed-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    CardDetailedPageComponent,
    FilterComponent,
    SearchResultComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [FilterComponent, SearchResultComponent],
})
export class YoutubeModule {}
