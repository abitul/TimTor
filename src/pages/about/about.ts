import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform ,NavParams} from 'ionic-angular';

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare const google;
@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
   @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    // start my map
    let posMaceio = { lat: -6.799079, lng: 110.643386 }
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: posMaceio,
      mapTypeId: 'roadmap'
    });
    this.map.setCenter(posMaceio);
  }
}
