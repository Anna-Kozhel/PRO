import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProfileCardComponent } from './components/profile/profile-components/profile-card/profile-card.component';
import { UnmatchedCardComponent } from './components/profile/profile-components/unmatched-card/unmatched-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ToolbarComponent,
    ProfileCardComponent,
    UnmatchedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
