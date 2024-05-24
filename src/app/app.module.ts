import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { CalendarModule } from 'primeng/calendar';
import { HeaderConponent } from './header/header.component';
import { DashboardConponent } from './dashboard/dashboard.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { LeftMenuComponent } from './left-nav/left-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardConponent,
    HeaderConponent,
    PageTitleComponent,
    WorldMapComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
    AutoCompleteModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbDropdownModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
