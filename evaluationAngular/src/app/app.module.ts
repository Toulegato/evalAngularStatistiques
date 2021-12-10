import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UneStatComponent } from './une-stat/une-stat.component';
import { StatListComponent } from './stat-list/stat-list.component';
import { CreationStatComponent } from './creation-stat/creation-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    UneStatComponent,
    StatListComponent,
    CreationStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
