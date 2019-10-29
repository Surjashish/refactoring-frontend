import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggedInNavbarComponent } from './logged-in-navbar/logged-in-navbar.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { VideoComponent } from './video/video.component';
import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [AppComponent, LoggedInNavbarComponent, VideoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule,
            MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,MatListModule,FlexLayoutModule,
            MatIconModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatSidenavModule,
            MatVideoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
