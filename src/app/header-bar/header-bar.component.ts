import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent {
  constructor() {}

  isOpen = false;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false;
  }
}