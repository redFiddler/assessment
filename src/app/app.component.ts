import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'code';
  isCollapsed: boolean = false;
  isMessagesCollapsed = false;
  isToDoCollapsed = false;
  isCalendarCollapsed = false;
  isResellersCollapsed = false;
  isTransactionsCollapsed = false;
  
  isLeftMenuCollapsed(eventData: boolean) {
    console.log('event data ', eventData);
    this.isCollapsed = eventData;
  }
}
