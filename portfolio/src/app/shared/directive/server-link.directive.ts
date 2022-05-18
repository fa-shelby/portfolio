import { Directive, ElementRef, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appServerLink]'
})

export class ServerLinkDirective {
  get appServerLink(): string {
    return this._appServerLink
  }

  @Input()
  set appServerLink(value: string) {
    this._appServerLink = value;
    this.el.nativeElement.setAttribute('href', environment.imgBaseUrl + this.appServerLink);
  }

  private _appServerLink = '';

  constructor(private el: ElementRef) { }

}
