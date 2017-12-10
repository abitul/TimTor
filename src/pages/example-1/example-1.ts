import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare const google;

@IonicPage()
@Component({
  selector: 'page-example-1',
  templateUrl: 'example-1.html',
})
export class Example_1Page {

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
