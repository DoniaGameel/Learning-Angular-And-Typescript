import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RedElDirective } from './red-el.directive'
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    RedElDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
