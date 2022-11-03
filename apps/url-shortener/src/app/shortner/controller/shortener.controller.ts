import { CreateUrlShortnerDto } from '../../dto/createUrlShortner';
import { Body, Controller, HttpStatus, Post, Get, Res, Param } from '@nestjs/common';
import { ShortenerUrlService } from '../service/shortener.service';
import { Response } from 'express';

@Controller('shortner')
export class ShortenerController {
  constructor(private shortenerUrlService: ShortenerUrlService) { }

  @Post()
  async createUrlShortener(@Body() createUrlShortner: CreateUrlShortnerDto, @Res() res: Response) {
    const urlCreated = await this.shortenerUrlService.createShortnerUrl(createUrlShortner)
    return res.status(HttpStatus.CREATED).json(urlCreated)
  }

  @Get(':urlId')
  async redirectUrlShortner(@Param('urlId') urlId: string, @Res() res: Response) {
    const { originUrl } = await this.shortenerUrlService.findShortUrl(urlId)
    return res.redirect(originUrl)
  }
}
