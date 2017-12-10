import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-detailinfo',
    templateUrl: 'detailinfo.html',
})
export class DetailInfoPage {
    title;
    subTitle;
    image;
    description;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.title = navParams.get('title');
        this.subTitle = navParams.get('subTitle');
        this.image = navParams.get('image');
        this.description = navParams.get('description');
    }

}
