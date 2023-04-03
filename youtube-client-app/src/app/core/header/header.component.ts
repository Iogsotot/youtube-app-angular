import { Component } from '@angular/core';
import { FilterService } from '../../feature/youtube/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private filterService: FilterService) {}

  filterToggle(): void {
    this.filterService.toggle();
  }
}
