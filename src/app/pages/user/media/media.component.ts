import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  permissionStatus: string = "";
  camData: any = null;
  capturedImage: any = "";
  trigger: Subject<void> = new Subject();

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  constructor() {
    this.checkPermission();
  }
  

  checkPermission() {
    navigator.mediaDevices.getUserMedia({ video: { width: 500, height: 500 } })
      .then((response) => {
        this.permissionStatus = 'Allowed';
        this.camData = response;
        this.startVideoStream();
      })
      .catch(err => {
        this.permissionStatus = 'Not Allowed';
        console.log(this.permissionStatus);
      });
  }

  startVideoStream() {
    const videoElement = document.querySelector('video') as HTMLVideoElement;
    if (videoElement && this.camData) {
      videoElement.srcObject = this.camData;
    }
  }

  capture(event: any) {
    console.log("event", event); // img details
    this.capturedImage = event.imageAsDataUrl; // Corrected property name
  }

  captureImage() {
    this.trigger.next();
  }
}
