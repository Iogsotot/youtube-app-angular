import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isFilterOpen = false;

  @Output()
  filterOpenChange = new EventEmitter<boolean>();

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
    this.filterOpenChange.emit(this.isFilterOpen);
  }
}
