import { Component, Inject, OnInit } from '@angular/core';
import { BannerCreated } from '@message-hub/marketinghub-interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'message-hub-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  banner: BannerCreated | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: BannerCreated) { }

  ngOnInit(): void {
    this.banner = {
      image: this.data.image,
      title: this.data.title,
      detail: this.data.detail,
      from: this.data.from,
      to: this.data.to,
      call: this.data.call,
      messageDefault: this.data.messageDefault,
      shortUrl: this.data.shortUrl
    }
  }

}
