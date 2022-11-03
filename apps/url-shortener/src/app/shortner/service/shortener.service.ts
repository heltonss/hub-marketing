import { environment } from './../../../environments/environment';
import { Url, UrlDocument } from './../../models/Url.schema';
import { CreateUrlShortnerDto } from '../../dto/createUrlShortner';
import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid'
import { validateUrl } from '../../utils/validate';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ShortenerUrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) { }

  async createShortnerUrl(body: CreateUrlShortnerDto): Promise<unknown> {
    const { account, originUrl } = body;
    const base = environment.base;

    const urlId = nanoid(7);

    if (validateUrl(originUrl)) {
      try {
        const shortUrl = `${base}/${urlId}`;
        const createUrl = new this.urlModel({
          urlId,
          account,
          originUrl,
          shortUrl,
        });
        const urlCreated = await createUrl.save()
        return urlCreated;
      } catch (err) {
        console.log(err);
      }
    }
  }

  async findShortUrl(urlId: string) {
    const urlFinded = await this.urlModel.findOneAndUpdate({ urlId }, { $inc: { clicks: 1 } })
    return urlFinded;
  }
}


