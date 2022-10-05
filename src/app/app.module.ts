import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { TodoService } from './todo.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookDataService,TodoService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
