import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  // By clicking on the Settings button, the Filtering criteria block should be toggled
  // It should be possible to sort search results by date or count of views
  // Sorting should work both in the direction of decreasing values and in the direction of increasing values
  // Using a pipe, filter search results by value that a user types in the input

  sortValue = 'tag?';

  onWordSort(e: Event) {
    // менять response.items по нужной сортировке
    console.log(this.sortValue, e);
  }

  @Input()
  isOpen: boolean = false;
}
