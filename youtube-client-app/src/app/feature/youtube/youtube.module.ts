import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../../shared/card/card.component';
import { CardDetailedComponent } from './components/card-detailed/card-detailed.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [CardDetailedComponent, FilterComponent, SearchResultComponent, CardComponent],
  imports: [CommonModule, FormsModule, MatIconModule, RouterModule, MatCardModule, MatButtonModule],
  exports: [FilterComponent, SearchResultComponent],
})
export class YoutubeModule {}
