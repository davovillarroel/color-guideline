import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './views/colors/colors.component';
import { HomeComponent } from './views/Home/home.component';

import { ColorComponent } from './components/color/color.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorsComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



