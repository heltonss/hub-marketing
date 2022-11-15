import { Response } from 'express';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateShortUrl } from '@message-hub/marketinghub-interfaces';
import { AdvertisingService } from '../../services/advertising/advertising.service';

@Controller('advertising')
export class AdvertisingController {
  constructor(private adsService: AdvertisingService) { }

  @Post()
  async getBanner(@Body() body: CreateShortUrl, @Res() res: Response) {
    const banner = await this.adsService.createBanner(body)
    return res.status(200).json(banner)
  }
}
