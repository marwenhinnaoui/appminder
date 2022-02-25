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
  images=[
    {
      imageFiltre: '../../assets/face-1.jpg',
      imageCamera:null
    },
    {
      imageFiltre: '../../assets/face-2.jpg',
      imageCamera:null
    },
    {
      imageFiltre: '../../assets/face-3.jpg',
      imageCamera:null
    }
  ];
  counter=null;
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
  CameraPreview.start(cameraPreviewOptions);
  this.cameraActive=true;
  this.counter=index;
}


flipCamera(){
  CameraPreview.flip();
}

stopCamera(){
  CameraPreview.stop();
  this.cameraActive=false;
}

async takePicture(index){
  const cameraSampleOptions: CameraSampleOptions = {
    quality: 50,
  };
  const result = await CameraPreview.captureSample(cameraSampleOptions);
  this.images[index].imageCamera= `data:image/png;base64,${result.value}`;
  this.cameraActive=false;
  CameraPreview.stop();
}
navBack(){
  this.navCrtl.back();
}

}
