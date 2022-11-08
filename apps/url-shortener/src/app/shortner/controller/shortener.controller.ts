import { UrlRequest } from './../../interfaces/urlRequest';
import { Body, Controller, HttpStatus, Post, Get, Res, Param } from '@nestjs/common';
import { ShortenerUrlService } from '../service/shortener.service';
import { Response } from 'express';
import ResponseUrlShortner from '../../dto/responseUrlShortner';

@Controller('shortner')
export class ShortenerController {
  constructor(private shortenerUrlService: ShortenerUrlService) { }

  @Post()
  async createUrlShortener(@Body() UrlRequest: UrlRequest, @Res() res: Response) {
    const urlCreated = await this.shortenerUrlService.createShortnerUrl(UrlRequest)
    return res.status(HttpStatus.CREATED).json(new ResponseUrlShortner(urlCreated))
  }

  @Get(':urlId')
  async redirectUrlShortner(@Param('urlId') urlId: string, @Res() res: Response) {
    const { originUrl } = await this.shortenerUrlService.findShortUrl(urlId)
    return res.redirect(originUrl)
  }
}
