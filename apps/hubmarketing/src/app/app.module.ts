import { AdvertisingModule } from './advertising/advertising.module';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AdvertisingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
