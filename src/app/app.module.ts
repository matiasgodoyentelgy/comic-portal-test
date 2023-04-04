import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CharacterModule } from './components/character/character.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
