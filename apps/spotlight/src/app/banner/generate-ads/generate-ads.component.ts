import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateShortUrl } from '@message-hub/marketinghub-interfaces';
import { Subscription } from 'rxjs';
import { AdsComponent } from '../ads/ads.component';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'message-hub-generate-ads',
  templateUrl: './generate-ads.component.html',
  styleUrls: ['./generate-ads.component.scss'],
})
export class GenerateAdsComponent implements OnDestroy {
  urlFormControl = new FormControl('', [Validators.required, Validators.required]);
  private adsSub: Subscription = new Subscription;
  constructor(private adsService: AdsService, public dialog: MatDialog){}

  create() {
    const body: CreateShortUrl = {
      originUrl: this.urlFormControl.value || '',
      account: "xpto"
    }
   this.adsSub = this.adsService.createBanner(body).subscribe(banner => this.openDialog(banner))
  }

  private openDialog(banner: any) {
    const dialogRef = this.dialog.open(AdsComponent, {
      data: banner
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy(): void {
    this.adsSub.unsubscribe()
  }
}
