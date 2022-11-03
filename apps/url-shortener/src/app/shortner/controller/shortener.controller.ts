import { CreateUrlShortnerDto } from '../../dto/createUrlShortner';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
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
}
