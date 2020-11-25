import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketModule, BookListModule } from './views'
import { ContainerModule } from './layout/container/container.module'
import { SharedModule } from './shared/shared.module';
import { RequestInterceptor } from './core/request.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocalStorageService } from './shared/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasketModule,
    BookListModule,
    ContainerModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
