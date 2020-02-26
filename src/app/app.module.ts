import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatBadgeModule, MatDialogModule, MatProgressSpinnerModule, MatMenuModule,
  MatIconModule, MatToolbarModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, MatListModule,
  MatInputModule,MatCardModule,MatTabsModule,MatGridListModule,MatSidenavModule, MatSelectModule,MatSnackBarModule
} from '@angular/material';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { LoadParcourComponent } from './components/load-parcour/load-parcour.component';
import { CreateParcoursComponent } from './components/create-parcours/create-parcours.component';
import { SearchParcourComponent } from './components/search-parcour/search-parcour.component';
import { DialogLoadParcoursComponent } from './components/dialog-load-parcours/dialog-load-parcours.component';
import { LoadingComponent } from './components/loading/loading.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    ParcoursComponent,
    LoadParcourComponent,
    CreateParcoursComponent,
    SearchParcourComponent,
    DialogLoadParcoursComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatTabsModule,

    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  entryComponents: [LoadingComponent, LoadParcourComponent, DialogLoadParcoursComponent],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
