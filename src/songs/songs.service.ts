import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from 'src/schemas/song.schema';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) {}

  async create(createSongDto: CreateSongDto) {
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  async find(id: string) {
    return this.songModel.findById(id).exec();
  }
  async findAll() {
    return this.songModel.find().exec();
  }

  async update(id: string, createSongDto: CreateSongDto) {
    return this.songModel.findByIdAndUpdate(id, createSongDto);
  }

  async delete(id: string) {
    return this.songModel.findByIdAndDelete(id).exec();
  }
}
