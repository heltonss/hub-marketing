import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { Ads, CreateShortUrl, UrlShortner } from '@message-hub/marketinghub-interfaces';
import { messageGenerator } from '@message-hub/message-generator';
import CreateBanner from '../../../models/CreateBanner';
import { UrlshortnerService } from '../urlshortener/urlshortner.service';

@Injectable()
export class AdvertisingService {

  constructor(private urlShortenerService: UrlshortnerService) { }

  async createBanner(body: CreateShortUrl): Promise<CreateBanner> {
    const ads = await this.getDataOfAds(body);
    return new CreateBanner(
      messageGenerator(),
      "Preço e estoque sujeito a alteração",
      await this.createShortUrl(body),
      ads
    )
  }

  async getDataOfAds({ originUrl }: CreateShortUrl): Promise<Ads> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(originUrl);

    const ads = await page.evaluate(() => {
      const $textcontent = (node: string) => {
        const query = document.querySelector(node)
        return query.textContent
      }

      const title = $textcontent('h3.hide-mobile').trim().split('\n')[0];
      const from = $textcontent('.p-through').split('de')[1].trim();
      const to = $textcontent('.p-price > strong').trim();
      const detail = $textcontent('.p-price > .p-price__detail').trim()
      const image = (document as any).querySelector('div.product > div.pgallery > div.photo > img').src

      return { title, image, from, to, detail }
    });

    await browser.close();
    return ads;
  }

  async createShortUrl(body: CreateShortUrl): Promise<string> {
    const { shortUrl } = await (await this.urlShortenerService.createShortnerUrl(body).toPromise()).data as UrlShortner;
    return shortUrl;
  }
}
