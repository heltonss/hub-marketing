import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema()
export class Url {
  @Prop({
    required: true,
  })
  account: string;

  @Prop({
    required: true,
  })
  urlId: string;

  @Prop({
    required: true
  })
  originUrl: string;

  @Prop({
    required: true
  })
  shortUrl: string;

  @Prop({
    required: true,
    default: 0
  })
  clicks: number;

  @Prop({
    required: true,
    default: Date.now
  })
  date: Date;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
