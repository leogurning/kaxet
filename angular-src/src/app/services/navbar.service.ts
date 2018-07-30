import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;
  linkaccess: boolean;
  constructor() { this.visible = true; this.linkaccess = true; }
    
    hide() { this.visible = false; }
    show() { this.visible = true; }
    toggle() { this.visible = !this.visible; }
    disableLink() { this.linkaccess = false }
}
