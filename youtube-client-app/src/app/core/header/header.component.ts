import { Component } from '@angular/core';
import { FilterService } from '../../feature/youtube/services/filter.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loggedIn$ = this.authService.isLoggedIn;

  constructor(private filterService: FilterService, private authService: AuthService) {}

  filterToggle(): void {
    this.filterService.toggle();
  }
}
