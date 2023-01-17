import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { env } from '../environments';
import { AppState } from './app.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppRouterModule,
    BrowserModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !env.production
    }),
    HttpClientModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
