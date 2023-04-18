import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isMenuOpen = false;

  toggleMenu():void {
    this.isMenuOpen = !this.isMenuOpen;    
  }

  closeMenu() {
    this.toggleMenu();
    const burger = document.getElementById('burger',) as HTMLInputElement | null;
    if(burger != null){
      burger.checked = false;
    }
  }
}
