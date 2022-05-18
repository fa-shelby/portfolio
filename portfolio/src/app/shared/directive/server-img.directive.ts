import { Directive, ElementRef, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appServerImg]'
})

export class ServerImgDirective {
  get appServerImg(): string {
    return this._appServerImg;
  }

  @Input()
  set appServerImg(value: string) {
    this._appServerImg = value;
    this.el.nativeElement.setAttribute('src', environment.imgBaseUrl + this.appServerImg);
  }

  private _appServerImg = '';

  constructor(private el: ElementRef) { }

}
