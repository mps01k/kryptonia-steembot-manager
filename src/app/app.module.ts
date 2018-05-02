import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { PostsComponent } from './pages/posts/posts.component';
import { HistoriesComponent } from './pages/histories/histories.component';
import { PostService } from './services/post.service';
import { HistoryService } from './services/history.service';
import { SearchService } from './services/search.service';
import { SearchesComponent } from './pages/searches/searches.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailService } from './services/detail.service';
import { UtilService } from './services/util.service';
import { HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsComponent,
    HistoriesComponent,
    SearchesComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PostService,
    HistoryService,
    SearchService,
    PostsComponent,
    DetailService,
    UtilService,
    HashLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
