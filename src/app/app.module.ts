import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './components/map/map.component';

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
  MatInputModule,MatCardModule,MatTabsModule,MatGridListModule,MatSidenavModule, MatSelectModule
} from '@angular/material';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CardStationComponent } from './components/card-station/card-station.component';
import { WinterHomeComponent } from './components/winter-home/winter-home.component';
import { SummerHomeComponent } from './components/summer-home/summer-home.component';
import { TabsLocationComponent } from './components/tabs-location/tabs-location.component';
import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllStationsComponent } from './components/all-stations/all-stations.component';


import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    ErrorDialogComponent,
    CardStationComponent,
    WinterHomeComponent,
    SummerHomeComponent,
    TabsLocationComponent,
    SideNavMenuComponent,
    FooterComponent,
    AllStationsComponent,
    MapComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
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
    NgZorroAntdModule,
    MatProgressSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    { provide: NZ_I18N, useValue: en_US }, 
    { provide: NZ_ICONS, useValue: icons }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
