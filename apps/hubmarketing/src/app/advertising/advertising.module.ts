import { AdvertisingController } from './controller/advertising/advertising.controller';
import { Module } from '@nestjs/common';
import { AdvertisingService } from './services/advertising/advertising.service';
import { UrlshortnerService } from './services/urlshortener/urlshortner.service';
import {HttpModule} from '@nestjs/axios'

@Module({
  controllers: [AdvertisingController],
  imports: [HttpModule],
  providers: [
    AdvertisingService,
    UrlshortnerService
  ]
})

export class AdvertisingModule {}
