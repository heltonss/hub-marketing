import { Url, UrlSchema } from './../models/Url.schema';
import { Module } from '@nestjs/common';
import { ShortenerController } from './controller/shortener.controller';
import { ShortenerUrlService } from './service/shortener.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  providers: [ShortenerUrlService],
  controllers: [ShortenerController]
})
export class ShortenerModule {}
