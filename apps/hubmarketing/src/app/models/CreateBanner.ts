import { Ads, Banner } from '@message-hub/marketinghub-interfaces';

export default class CreateBanner implements Banner {
  readonly title: string;
  readonly detail: string;
  readonly image: string;
  readonly from: string;
  readonly to: string;

  constructor(readonly call: string, readonly messageDefault: string, readonly shortUrl: string, ads: Ads){
    this.call = call;
    this.messageDefault = messageDefault;
    this.shortUrl = shortUrl;
    this.title = ads.title;
    this.detail = ads.detail;
    this.image = ads.image;
    this.from = ads.from;
    this.to = ads.to;
  }

}
