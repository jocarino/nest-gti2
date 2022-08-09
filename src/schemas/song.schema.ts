import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, mongo } from 'mongoose';
import { Artist } from './artist.schema';

export type SongDocument = Song & Document;

@Schema()
export class Song {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  platform: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artists' }] })
  artists: mongoose.Schema.Types.ObjectId[];
}

export const SongSchema = SchemaFactory.createForClass(Song);
