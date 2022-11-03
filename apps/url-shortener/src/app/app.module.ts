import { ShortenerModule } from './shortner/shortener.module';
import { environment } from './../environments/environment';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controllers/main/app.controller';
import { AppService } from './services/appservice/app.service';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongodbUrl),
    ShortenerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
