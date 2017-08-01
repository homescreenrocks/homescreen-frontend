import { Component, OnInit } from '@angular/core';
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'hs-gallery-content',
  templateUrl: './gallery-content.component.html',
  styleUrls: ['./gallery-content.component.css']
})
export class GalleryContentComponent implements OnInit {
  openModalWindow = false;
  imagePointer = 0;

  openModalWindowObservable = false;
  imagePointerObservable = 0;

  imagesArray: Array<Image> = [
    new Image(
      'http://lorempixel.com/g/1920/1080/',
      'http://lorempixel.com/g/400/200/', // example with a PNG thumb image
      'Description 1',
      'http://lorempixel.com/g/400/200/'
    ),
    new Image(
      'http://lorempixel.com/g/800/400/',
      'http://lorempixel.com/g/400/300/', // example with a PNG thumb image
      'Description 2',
      'http://www.google.com'
    ),
    new Image(
      'http://lorempixel.com/g/800/400/',
      'http://lorempixel.com/g/300/200/', // example with a PNG thumb image
      'Description 3',
      'http://www.google.com'
    ),
    new Image(
      'http://lorempixel.com/g/800/400/',
      'http://lorempixel.com/g/500/100/', // example with a PNG thumb image
      'Description 4',
      'http://www.google.com'
    ),
    new Image(
      'http://lorempixel.com/g/800/400/',
      'http://lorempixel.com/g/100/250/', // example with a PNG thumb image
      'Description 5',
      'http://www.google.com'
    )
  ];

  customDescription: Description = {
    imageText: 'Foto ',
    numberSeparator: ' von ',
    beforeTextDescription: ' - '
  };

  // observable of an array of images with a delay to simulate a network request
  images: Observable<Array<Image>> = Observable.of(this.imagesArray); // .delay(300);


  constructor() { }

  ngOnInit() {
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    this.openModalWindow = false;
    this.openModalWindowObservable = false;
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('action: ' + Action[event.action]);
    console.log('result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onfirst action: ' + Action[event.action]);
    console.log('onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onlast action: ' + Action[event.action]);
    console.log('onlast result:' + event.result);
  }

}
