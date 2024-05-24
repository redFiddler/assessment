import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-left-manu',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})

export class LeftMenuComponent {
  isCollapsed: boolean = false;
  @Output() isLeftMenuCollapsed = new EventEmitter<boolean>;

  toggleSideNav() {
    this.isCollapsed = !this.isCollapsed;
    this.isLeftMenuCollapsed.emit(this.isCollapsed)
  }
}