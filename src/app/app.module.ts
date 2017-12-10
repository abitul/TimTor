import { OrderPage } from './../pages/order/order';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailInfoPage } from '../pages/detailinfo/detailinfo';
import { SlideNewsPage } from '../pages/slidenews/slidenews';
import { Example_1Page } from '../pages/example-1/example-1';
import { Camera } from '@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AboutPage,
    ContactPage,
    TabsPage,
    SearchPage,
    DetailInfoPage,
    SlideNewsPage,
    Example_1Page,
    OrderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    IonicImageViewerModule
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AboutPage,
    ContactPage,
    TabsPage,
    SearchPage,
    DetailInfoPage,
    SlideNewsPage,
    Example_1Page,
    OrderPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: LOCALE_ID, useValue: "id-ID" },
  ]
})
export class AppModule { }
