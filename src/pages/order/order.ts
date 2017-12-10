import { Component } from "@angular/core/";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the About page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: "page-order",
  templateUrl: "order.html"
})
export class OrderPage {
  public base64Image: string;
  camera;
  constructor(public newCamera: Camera) {
    this.camera = newCamera;
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = "data:image/jpeg;base64," + imageData;
        console.log(this.base64Image);
      },
      err => {
        console.log(err);
        // Handle error
      }
    );
  }
}
