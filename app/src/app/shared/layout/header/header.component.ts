import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from './../../auth/auth.service';

declare var $: any;

@Component({
  selector: 'sa-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  searchMobileActive = false;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  toggleSearchMobile() {
    this.searchMobileActive = !this.searchMobileActive;

    $('body').toggleClass('search-mobile', this.searchMobileActive);
  }

  onSubmit() {
    this.router.navigate(['/miscellaneous/search']);
  }

  logout() {
    this.authService.logout(true);
  }
}
