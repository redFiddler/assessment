import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardConponent {
  isMessagesCollapsed = false;
  isToDoCollapsed = false;
  isCalendarCollapsed = false;
  isResellersCollapsed = false;
  isTransactionsCollapsed = false;
  date: Date[] | undefined;
}
