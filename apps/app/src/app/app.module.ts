import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { env } from '../environments';

@NgModule({
  imports: [
    AppRouterModule,
    BrowserModule,
    NgxsModule.forRoot([], {
      developmentMode: !env.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false,
      },
    }),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
