import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { IconBlockComponent } from './components/icon-block/icon-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    IconBlockComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
