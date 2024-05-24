import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'code';
  isCollapsed = true;
  isMessagesCollapsed = false;
  isToDoCollapsed = false;
  isCalendarCollapsed = false;
  isResellersCollapsed = false;
  isTransactionsCollapsed = false;

  countries = [
    {
      name: 'Afghanistan',
      code: 'AF',
    },
  ];

  selectedCountry: any;

  filteredCountries: any = [];

  filterCountry(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  toggleSideNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
