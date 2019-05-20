import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { BodyHeaderComponent } from './body-header/body-header.component';
import { BodyStatsComponent } from './body-stats/body-stats.component';
import { BodyFilesComponent } from './body-files/body-files.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BodyComponent,
    BodyHeaderComponent,
    BodyStatsComponent,
    BodyFilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
