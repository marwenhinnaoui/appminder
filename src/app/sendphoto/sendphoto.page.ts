import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CameraPreviewOptions, CameraPreview, CameraOpacityOptions, CameraSampleOptions } from '@capacitor-community/camera-preview';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sendphoto',
  templateUrl: './sendphoto.page.html',
  styleUrls: ['./sendphoto.page.scss'],
})
export class SendphotoPage implements OnInit {
  image=null;
  cameraActive=false;
  images=[null, null, null];
  counter=4;
  isFilter=null;
  index=null;
  constructor(private navCrtl: NavController) { }

  ngOnInit() {}

getCamera(index){
  const cameraPreviewOptions: CameraPreviewOptions = {
    x:0,
    y:0,
    width: window.screen.width,
    height: window.screen.height,
    parent:'cameraPreview',
    className:'cameraPreview',
    position: 'rear',
    toBack:true
  };
  this.index=index;
  CameraPreview.start(cameraPreviewOptions);
  this.cameraActive=true;
}


flipCamera(){
  CameraPreview.flip();
}

stopCamera(){
  CameraPreview.stop();
  this.cameraActive=false;
  this.counter=null;
}

async takePicture(){
  const cameraSampleOptions: CameraSampleOptions = {
    quality: 50,
  };
  const result = await CameraPreview.captureSample(cameraSampleOptions);
  this.images[this.index] = `data:image/png;base64,${result.value}`;
  this.cameraActive=false;
  CameraPreview.stop();
  console.log(this.counter);
  this.index=null;
}
navBack(){
  this.navCrtl.back();
}

}
