import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  public onClick() {
    this.localStorageService.removeItem('token');
    this.router.navigate(['/login']);
  }
}
