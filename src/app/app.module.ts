import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'ngx-schema-form';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [SchemaFormModule.forRoot(), BrowserModule, RouterModule.forRoot([]), Bootstrap4FrameworkModule],
  declarations: [AppComponent],
  providers: [
    { provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
