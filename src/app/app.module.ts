import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from 'ngx-schema-form';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Bootstrap3FrameworkModule } from '@ajsf/bootstrap3';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JsonSchemaFormModule } from '@ajsf/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SchemaFormModule.forRoot(),
    RouterModule.forRoot([]),
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    JsonSchemaFormModule,
    MaterialDesignFrameworkModule,
    Bootstrap3FrameworkModule,
    Bootstrap4FrameworkModule,
    FlexLayoutModule,
  ],
  declarations: [AppComponent],
  providers: [
    { provide: WidgetRegistry, useClass: DefaultWidgetRegistry },
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
