import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Home', component: HomePage },
      { title: 'Aceh', component: ListPage },
      { title: 'Bali', component: LoginPage },
      { title: 'Banten', component: HomePage },
      { title: 'Bengkulu', component: HomePage },
      { title: 'Gorontalo', component: ListPage },
      { title: 'Jakarta', component: LoginPage },
      { title: 'Jawa Barat', component: HomePage },
      { title: 'Jawa Tengah', component: HomePage },
      { title: 'Jawa Timur', component: ListPage },
      { title: 'Kalimantan Barat', component: LoginPage },
      { title: 'Kalimantan Selatan', component: HomePage },
      { title: 'Kalimantan Tengah', component: HomePage },
      { title: 'Kalimantan Timur', component: ListPage },
      { title: 'Kalimantan Utara', component: LoginPage },
      { title: 'Kepulauan Bangka Belitung', component: HomePage },
      { title: 'Kepulauan Riau', component: HomePage },
      { title: 'Lampung', component: HomePage },
      { title: 'Maluku', component: ListPage },
      { title: 'Maluku Utara', component: LoginPage },
      { title: 'Nusa Tenggara Barat', component: HomePage },
      { title: 'Nusa Tenggara Timur', component: HomePage },
      { title: 'Papua Barat', component: ListPage },
      { title: 'Riau', component: LoginPage },
      { title: 'Sulawesi Barat', component: HomePage },
      { title: 'Sulawesi Selatan', component: HomePage },
      { title: 'Sulawesi Tengah', component: ListPage },
      { title: 'Sulawesi Tenggara', component: LoginPage },
      { title: 'Sulawesi Utara', component: HomePage },
      { title: 'Sumatera Barat', component: HomePage },
      { title: 'Sumatera Selatan', component: HomePage },
      { title: 'Sumatera Utara', component: ListPage },
      { title: 'Yogyakarta', component: LoginPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
    // this.nav.setRoot(page.component);
  }
}
