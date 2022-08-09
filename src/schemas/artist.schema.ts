import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Song } from './song.schema';

export type ArtistDocument = Artist & Document;

@Schema()
export class Artist {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  profile: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }] })
  songIds: mongoose.Schema.Types.ObjectId[];
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
